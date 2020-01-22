import React, { useState, useContext, useEffect, useRef } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { SearchContext } from "../contexts/SearchContext";
import { AnimeContext } from "../contexts/AnimeContext";
import Anime from "./Anime";
import {device} from "../devices"
import Loader from 'react-loader-spinner'


const Carousel = ({ topAnime }) => {
  const [anime, setAnime] = useState(topAnime);
  const [loading, setLoading] = useState(false)

  const { filter } = useContext(FilterContext);
  const { search } = useContext(SearchContext);
  const { selected, dispatch } = useContext(AnimeContext);

  const carouselSelector = useRef();
  const [scrollProgress, setScrollProgress] = useState("0");
    let getScrollPercent = () => {
       return  (carouselSelector.current.scrollLeft /
            (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth)) * 100
    }

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState();
  const [scrollLeft, setScrollLeft] = useState();

  let changeAnime = (response) => {

    setAnime(response)
    if( filter !== "init") {

    let element = carouselSelector.current
        element.classList.remove("wipeContent")
        void element.offsetWidth
        element.classList.add("wipeContent");

    }
  }


//   let onMouseDown = e => {
//     setIsDown(true);
//     setStartX(e.pageX - carouselSelector.current.offsetLeft);
//     setScrollLeft(carouselSelector.current.scrollLeft);
//   };

//   let onMouseLeave = e => {
//     setIsDown(false);
//   };

//   let onMouseUp = e => {
//     setIsDown(false);
//   };

//   let onMouseMove = e => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX;
//     const distance = (x - startX) * 3;
//     carouselSelector.current.scrollLeft = scrollLeft - distance;
   
//     let scrollPercent = getScrollPercent()
//     setScrollProgress(scrollPercent);
    
//   };

//   let onTouchMove = e => {
//     let scrollPercent = getScrollPercent()
//     setScrollProgress(scrollPercent);
// }



  useEffect(() => {
    let url = ""

    if(filter === "top" || filter === "init") {
      url = "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    } else if(filter === "upcoming") {
      url = "https://api.jikan.moe/v3/top/anime/1/upcoming"
    } else(
      url = "https://api.jikan.moe/v3/top/anime/1/movie"
    )
     
    fetch(url)
      .then(response => response.json())
      .then(responseJson => changeAnime(responseJson.top))
      .catch(err => console.log(err));

  }, [filter]);

  useEffect(() => {
    if (search.query !== "") {
      function formatQueryParams(params) {
        const queryItems = Object.keys(params).map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        );
        return queryItems.join("&");
      }

      const baseurl = "https://api.jikan.moe/v3/search/anime";
      let params = {
        q: search.query,
        page: 1,
        type: "tv",
        limit: 20
      };

      let url = baseurl + "?" + formatQueryParams(params);
          carouselSelector.current.classList.add('wipeContent')
      setLoading(true)
      fetch(url)
        .then(response => response.json())
        .then(responseJson => setAnime(responseJson.results) )
        .then(res => setTimeout(() => {
          setLoading(false)
          carouselSelector.current.classList.add('wipeContent')
        },500))
        .catch(err => console.log(err));
    }
  }, [search.query]);

  useEffect(() => {
    dispatch({ type: "SELECT_ANIME", selected: {} });
  }, [anime]);

  // useEffect(() => {
  //   console.log(filter)
  //   if(filter === "init") {

  //   } else {
  //     let element = carouselSelector.current
  //     element.classList.remove("wipeContent")
  //     void element.offsetWidth
  //     element.classList.add("wipeContent");
  //   }
  // }, [filter])



  return (
    <div className="carouselWrapper" 
    >
      {loading === true ? 
      <Loader  type="Circles" color="#ef5050" height={45} width={45} />
      :
      <div
        className={`carousel ${isDown === true ? "isDown" : ""} `}
        ref={carouselSelector}
        // onMouseDown={e => onMouseDown(e)}
        // onMouseLeave={e => onMouseLeave(e)}
        // onMouseUp={e => onMouseUp(e)}
        // onMouseMove={e => onMouseMove(e)}
        // onTouchMove={e => onTouchMove(e)}

      >
        
        {
          anime.length === 0 ? 
          <p>No Results</p>
          :
          anime.map((anime, index) => (
            <Anime key={index} anime={anime} />
          ))
        }
      </div>
      }
      <style jsx>{`
        .carouselWrapper {
            width: 90%;
            margin: 10px auto;
            height: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .carousel {
          width: 100%;
          cursor: pointer;
          display: flex;
          min-height: 175px;
          height: 100%;
          max-width: 100%;
          overflow-y: scroll; /* has to be scroll, not auto */
          -webkit-overflow-scrolling: touch;
          text-align: center;
          align-items: center;
          overflow-y: hidden;
        }

        .carousel {
          -ms-overflow-style: none; // IE 10+
          overflow: -moz-scrollbars-none; // Firefox
        }

        .carousel::-webkit-scrollbar {
          display: none; // Safari and Chrome
        }

        .carousel p {
          width: 100%;
        }

        .scrollBar {
          width: ${scrollProgress + '%'};
          height: 2px;
          background-color: rgb(71, 71, 51);
        }

        .wipeContent {
          animation: wipeContent 2s;
        }

        @keyframes wipeContent {
          0% {
            width: 0%;
            opacity: 0;
          }


          100% {
            width: 100%;
          }
        }

        @media ${device.laptop} {
            .carouselWrapper {
              width: 80.5%;
              margin: 20px auto;
              position: relative;
              right: 1.7%;
              clip-path: polygon(2% 0, 100% 0%, 98% 100%, 0% 100%);

            }

            .scrollBar {

            }
        }
      `}</style>
    </div>
  );
};

export default Carousel;

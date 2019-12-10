import React, { useState, useContext, useEffect, useRef } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { SearchContext } from "../contexts/SearchContext";
import { AnimeContext } from "../contexts/AnimeContext";
import Anime from "./Anime";
import {device} from "../devices"

const Carousel = ({ topAnime }) => {
  const [anime, setAnime] = useState(topAnime);
  const { filter } = useContext(FilterContext);
  const { query } = useContext(SearchContext);
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

  let onMouseDown = e => {
    setIsDown(true);
    setStartX(e.pageX - carouselSelector.current.offsetLeft);
    setScrollLeft(carouselSelector.current.scrollLeft);
    let scrollPercent = getScrollPercent()
    setScrollProgress(scrollPercent);
  };

  let onMouseLeave = e => {
    setIsDown(false);
  };

  let onMouseUp = e => {
    setIsDown(false);
    let scrollPercent = getScrollPercent()
    setScrollProgress(scrollPercent);
  };

  let onMouseMove = e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const distance = (x - startX) * 3;
    carouselSelector.current.scrollLeft = scrollLeft - distance;
   
    
  };

  let onTouchStart = e => {
        let scrollPercent = getScrollPercent()
        setScrollProgress(scrollPercent);
  }

  let onTouchEnd = e => {
        let scrollPercent = getScrollPercent()
        setScrollProgress(scrollPercent);
  }

  useEffect(() => {
    const url =
      filter === "top"
        ? "https://api.jikan.moe/v3/top/anime/1/bypopularity"
        : "https://api.jikan.moe/v3/top/anime/1/upcoming";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => setAnime(responseJson.top))
      .catch(err => console.log(err));
  }, [filter]);

  useEffect(() => {
    if (query !== "") {
      function formatQueryParams(params) {
        const queryItems = Object.keys(params).map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        );
        return queryItems.join("&");
      }

      const baseurl = "https://api.jikan.moe/v3/search/anime";
      let params = {
        q: query,
        page: 1,
        type: "tv",
        limit: 10
      };

      let url = baseurl + "?" + formatQueryParams(params);
      fetch(url)
        .then(response => response.json())
        .then(responseJson => setAnime(responseJson.results))
        .catch(err => console.log(err));
    }
  }, [query]);

  useEffect(() => {
    dispatch({ type: "SELECT_ANIME", selected: {} });
  }, [anime]);

  return (
    <div className="carouselWrapper">
      <div
        className={`carousel ${isDown === true ? "isDown" : ""}`}
        ref={carouselSelector}
        onMouseDown={e => onMouseDown(e)}
        onMouseLeave={e => onMouseLeave(e)}
        onMouseUp={e => onMouseUp(e)}
        onMouseMove={e => onMouseMove(e)}
        onTouchStart={e => onTouchStart(e)}
        onTouchEnd={e => onTouchEnd(e)}

      >
        {anime.map((anime, index) => (
          <Anime key={index} anime={anime} />
        ))}
      </div>
      <div className="scrollBar"></div>
      <style jsx>{`
        .carouselWrapper {
          width: 100%;
        }

        .carousel {
          cursor: pointer;
          display: flex;
          min-height: 175px;
          max-width: 100%;
          overflow-y: scroll; /* has to be scroll, not auto */
          -webkit-overflow-scrolling: touch;
        }

        .carousel {
          -ms-overflow-style: none; // IE 10+
          overflow: -moz-scrollbars-none; // Firefox
        }

        .carousel::-webkit-scrollbar {
          display: none; // Safari and Chrome
        }

        .scrollBar {
          width: ${scrollProgress + '%'};
          height: 2px;
          background-color: rgb(71, 71, 51);
          transition: 0.3s width;
        }

        @media ${device.laptop} {
            .scrollBar {
                transition: 0.5s width;

            }
        }
      `}</style>
    </div>
  );
};

export default Carousel;

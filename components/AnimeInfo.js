import React, { useContext, useState, useEffect } from "react";
import { device } from "../devices";
import { AnimeContext } from "../contexts/AnimeContext";
import { SearchContext } from "../contexts/SearchContext";
import { FilterContext } from "../contexts/FilterContext"
import Loader from 'react-loader-spinner'


const AnimeInfo = () => {
  const { search } = useContext(SearchContext);
  const { filter } = useContext(FilterContext);


  const { selected, dispatch } = useContext(AnimeContext);
  let [info, setInfo] = useState();
  const [trailer, setTrailer] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    let stopLoading = res => {
      setTimeout(() => {

      setInfo(res);
      setLoading(false);
      },500)
    };

    if (selected.mal_id !== undefined) {
      
      setLoading(true);
     

      fetch(`https://api.jikan.moe/v3/anime/${selected.mal_id}`)
        .then(response => response.json())
        .then(responseJson => stopLoading(responseJson))
        .catch(err => console.log(err));
    }
  }, [selected]);

  useEffect(() => {
    dispatch({ type: "SELECT_ANIME", selected: {} });
  }, [search, filter]);

  let styles = {
    position: 'absolute',
    top: '10px',
    right: '6%',
  };

  return (
    <div className="animeInfoBorder">
      <div className="animeInfoWrapper">
        <div className="animeInfo">
          <div className="title">
            {selected.title !== undefined
              ? selected.title.length > 20
                ? selected.title.slice(0, 20) + "..."
                : selected.title
              : "Select Anime"}
          </div>
          {loading === true && selected.title !== undefined && <Loader style={styles} type="Circles" color="#ef5050" height={25} width={25} /> }
          {loading !== true && selected.title !== undefined && (
            <div className="info">
              <p className="synopsis">{info.synopsis}</p>
              <div className="dataWrapper">
                <div className="ratingWrapper">
                
                  <div className="rating">
                    {selected.score === 0 || selected.score === undefined
                      ? "No rating"
                      : selected.score + "/10"}
                  </div>
                  <img
                    className="icon rating"
                    src={
                      selected.score === 0 || selected.score === undefined
                        ? "icons/star-crossed-icon.png"
                        : "icons/star-filled-icon.png"
                    }
                  ></img>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
                .animeInfoBorder {
                    box-sizing: border-box;
                    background-color: #7E7E7E;
                    padding: 5px;
                    position relative;
                    margin-top: 3.5%;
                    clip-path: polygon(0% 0, 100% 0%, 100% 35% ,65% 100%, 0% 100%);
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    top: 20%;
                }

                .animeInfoWrapper {
                    box-sizing: border-box;
                    height: 100%;
                    background-color: white;
                    clip-path: polygon(0% 0, 100% 0%, 100% 33% ,64% 100%, 0% 100%);
                }

                .animeInfo {
                    height: 75%;
                    position: relative;
                    align-items: center;
                    text-align: left;
                    padding: 15px;

                }

                .title {
                    width: 100%;
                    font-size: 1.1em;
                    font-weight: 400;
                    border-bottom: 1px solid #9B9B9B;
                    padding-bottom: 10px;
                    text-align: left;
                }

                .loader {
                  width: 100%;
                  margin: 0 auto;
                  display: block;
                }

                .info {
                    height: 100%;
                    width: 100%;
                    margin: 0 auto;
                    padding-top: 10px;
                    text-align: left;
                    display:flex;
                }


                .info div {
                    visibility: ${
                      selected.title === undefined ? "hidden" : "visible"
                    };
                }

                .synopsis {
                  font-size: .7em;
                  margin: 0;
                  width: 60%;
                  height: 89%;
                  overflow-x: auto;
                  padding-right: 15px;
                }

                .synopsis::-webkit-scrollbar {
                  width: 5px;
                }

                .synopsis::-webkit-scrollbar-thumb {
                  background-color: #EF5050;
                  border-radius: 6px;

                }

                .synopsis::-webkit-scrollbar-track {
                  background-color: rgba(2,2,2,0.2);


                }

                .ratingWrapper {
                    visibility: ${
                      selected.title === undefined ? "hidden" : "visible"
                    };
                    display: flex;
                    align-items: center;
                    margin-bottom: 15%;
                }

                .videosWrapper {
                    display: block;
                    visibility: ${
                      selected.title === undefined ? "hidden" : "visible"
                    };
                    display: flex;
                    align-items: center;
                }

                .icon {
                    height: 20px;
                    -webkit-filter: ${
                      selected.title === undefined ? "grayscale(100%)" : "none"
                    }; /* Safari 6.0 - 9.0 */
                    filter: ${
                      selected.title === undefined ? "grayscale(100%)" : "none"
                    };
                    margin-left: 10px;
                }

                .rating, .videos {
                    margin-left: 10px;
                    font-size: .7em;

                }

                @media ${device.mobileS} {

                .animeInfo {
                  height: 65%;
                }

                .title {
                  font-size: 1em;
                }
              }

              @media ${device.laptop} {
               
                .animeInfoBorder {
                  clip-path: polygon(2% 0, 98.5% 0%, 97% 55% ,75% 100%, 0% 100%);
                  height: 100%;
                  position: static;
                  margin-top: 0;
              }

              .animeInfoWrapper {
                  clip-path: polygon(2% 0, 98.5% 0%, 97% 55% ,75% 100%, 0% 100%);
                  
              }

              .animeInfo {
                  display:flex;
                  left: 3%;
                  height: 100%;
                  padding: 0;
              }

              .icon {
                  height: 65px;
              }

              .title {
                  font-size: 1.5em;
                  max-width: 250px;
                  font-weight: 400;
                  margin: 0 20px;
                  border-bottom: none;
                  border-right: 1px solid #9B9B9B;
                  height: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex: 0 0 25%;
                  padding-right: 20px;
                  margin-left: 40px;
              }

              .info {
                  height: 80%;
                  border-top: none;
                  margin-left: 15px;
                  padding-top: 0;
                  justify-content: space-around;
                  flex: 0 0 45%;

              }

              .info::-webkit-scrollbar {    display: none;}


              .ratingWrapper {
                  margin-top: 0;
              }

              .videosWrapper {
                  margin-top: 0;
              }


              .icon {
                height: 30px;
              }

              .rating, .videos {
                font-size: 1em;
                
              }
              
          }
                @media ${device.laptopL} {
                  .info {
                    flex: 0 0 60%;

                  }
                  .animeInfoBorder {
                    clip-path: polygon(2% 0, 98.5% 0%, 97% 55% ,85% 100%, 0% 100%);
                    height: 100%;
                    position: static;
                    margin-top: 0;
                }
  
                .animeInfoWrapper {
                    clip-path: polygon(2% 0, 98.5% 0%, 97% 55% ,85% 100%, 0% 100%);
                    
                }
              }

              @media ${device.desktop} {
                .title {
                  font-size: 2em;
                }
                
                .synopsis {
                  font-size: 1.4em
                }


              .icon {
                height: 40px;
              }

                .rating, .videos {
                  font-size: 1.3em;
                  
                }
              }
            `}
      </style>
    </div>
  );
};

export default AnimeInfo;

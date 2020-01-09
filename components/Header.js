import React, { useState, useEffect, useContext, useRef } from "react";
import Search from "../components/Search";
import { SearchContext } from "../contexts/SearchContext"

import { device } from "../devices";

const Header = () => {
    const { search, dispatch } = useContext( SearchContext )

  const title = useRef();
  const toggleSearchMode = () => {
    dispatch({type: "ACTIVATE_SEARCH", active: !search.active})
    if (search.active) {
      title.current.classList.remove("slideI");
      title.current.classList.add("slideO");
    } else {
      title.current.classList.remove("slideO");
      title.current.classList.add("slideI");
    }
  };

  useEffect(() => {
    if (search.active) {
        title.current.classList.remove("slideI");
        title.current.classList.add("slideO");
      } else {
        title.current.classList.remove("slideO");
        title.current.classList.add("slideI");
      }
  },[search])


  return (
    <header>
      <h1 ref={title} className="title">
        ANIME TRAILERS
      </h1>
      <Search></Search>
      <span className="searchButton" onClick={() => toggleSearchMode()}>
        search
      </span>
      <style jsx>
        {`
            header {
                justify-content: flex-end;
                width: 100%;
                position: relative;
                height: 20%;
                background-color:#EF5050;
            }
            
            .title {
                font-family: council, sans-serif;
                font-weight: 400;
                font-style: normal;
                text-align: center;
                font-size: 3.5em;
                text-align: center;
                margin: 0 10px 5px 0px;
                display: inline-block;
                order: 1;
                color: white;
                position: absolute;
                right: 5px;
                bottom: 25px;
            }

            .searchButton {
                display: block;
                color: white;
                position: absolute;
                bottom: 15px;
                left: 15px;
                font-size: .75em;
            }

            .slideO {
              animation: slideO 1s forwards;
            }
        
            @keyframes slideO {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(200%);
                }
            }

            .slideI {
                animation: slideI 1s forwards;
              }
          
              @keyframes slideI {
                  0% {
                      transform: translateX(200%);
                  }
                  100% {
                      transform: translateX(0);
                  }
              }
              
            @media ${device.laptop} {
                
                header {
                    
                    justify-content: flex-end;
                    width: 80%;
                    clip-path: polygon(2% 0, 100% 0%, 98% 100%, 0% 100%);
    
                }
                
                .searchButton {
                    left: 35px;
                    font-size:1.5em;
                }

                header {
                    width: 80%;
                    margin: 0 auto;
                }

                .title {
                    font-family: council, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    text-align: center;
                    font-size: 9em;
                    text-align: center;
                    margin: 0 10px 5px 0px;
                    display: inline-block;
                    order: 1;
                    color: white;
                    position: absolute;
                    right: 30px;
                    bottom: 0px
                }

                .logoWrapper {
                    margin-right: 10%;
                    flex: 0 0 40%;
                    display: flex;
                    min-height: 300px;
                    align-items: center;

                }
                
            }
        
        `}
      </style>
    </header>
  );
};

export default Header;

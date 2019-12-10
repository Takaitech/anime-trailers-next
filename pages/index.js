import Link from "next/link";
import Head from 'next/head';

import fetch from "isomorphic-unfetch";
import Header from "../components/Header";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import VideosOverlay from '../components/VideosOverlay'
import FilterContextProvider from "../contexts/FilterContext";
import SearchContextProvider from "../contexts/SearchContext";
import AnimeContextProvider from "../contexts/AnimeContext";
import OverlayContextProvider from "../contexts/OverlayContext"
import { device } from '../devices'


const Index = ({ topAnime }) => (
  <div className="app">
    <Head>
      <title>Anime Trailers</title>
      <link href="/styles/lity.min.css" rel="stylesheet"></link>
      <script src="/jquery.js"></script> 
      <script src="/lity.min.js"></script>
      <link rel="stylesheet" href="https://use.typekit.net/cye7qdh.css"></link>
    </Head>
    <FilterContextProvider>
      <SearchContextProvider>
        <AnimeContextProvider>
          <OverlayContextProvider>
            <VideosOverlay></VideosOverlay>
            <Footer></Footer>
            <Header></Header>
            <div className="center-wrapper">
              <Search></Search>  
              <Carousel topAnime={topAnime}></Carousel> 
              <Filters></Filters>
            </div>
            <Footer></Footer>
          </OverlayContextProvider>
        </AnimeContextProvider>
      </SearchContextProvider>
    </FilterContextProvider>
    <style jsx global>
      {`

        html,
        body,
        #__next,
        .app {
          height: 100%;
          width: 100%;
          margin: 0;
          background-color: rgb(15, 15, 15);     
          font-family: campaign, sans-serif;
          font-weight: 200;
          font-style: normal;
          
        }

        .app {
          display: flex;
          align-items: center;
          width: 100%;
          margin: 0 auto;
          position: relative;
          overflow: hidden;

        }

        .center-wrapper {
          align-items: center;
          display: flex;
          justify-content: left;
          flex-wrap: wrap;
          position: relative;
          top: 25px;
          max-width: 100%;

        }

        @media ${device.laptop} { 
          .app {
            width: 80%;
          }
        }
      `}
    </style>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.top.length}`);

  return {
    topAnime: data.top.map(entry => entry)
  };
};

export default Index;

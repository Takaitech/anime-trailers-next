import Link from "next/link";
import Head from 'next/head';
import fetch from "isomorphic-unfetch";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer"
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
      <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
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
            <Header></Header>
            <Carousel topAnime={topAnime}></Carousel> 
            <Footer></Footer>
          </OverlayContextProvider>
        </AnimeContextProvider>
      </SearchContextProvider>
    </FilterContextProvider>
    <style jsx global>
      {`

        html,body {
          overflow: hidden;
          height: 100%;

        }
        html,
        body,
        #__next,
        .app {
          height: 100%;
          width: 100%;
          margin: 0;
          background-color: white;     
          font-family: titling-gothic-fb;
          font-weight: 200;
          font-style: normal;
        }

        .app {
          align-items: center;
          height: 100%;
          width: 100%;
          margin: 0 auto;
          position: relative;
        }


        @media ${device.laptop} { 
          .app {
            width: 100%;
            padding-top: 20px;

          }
        }
      `}
    </style>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity");
  const data = await res.json();


  return {
    topAnime: data.top.map(entry => entry)
  };
};

export default Index;

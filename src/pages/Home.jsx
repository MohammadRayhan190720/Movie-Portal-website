import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import UpComeingMovies from "../components/UpComeingMovies";
import FeaturedMovies from "../components/FeaturedMovies";
import Trending from "../components/Trending";
import Newsletter from "../components/NewsLetter";

const Home = () => {

  const moviesData = useLoaderData();
  // console.log(moviesData);

  return (
    <div>
      <Banner></Banner>
      <FeaturedMovies moviesData={moviesData}></FeaturedMovies>
      <UpComeingMovies></UpComeingMovies>
      <Trending></Trending>
            <Faq></Faq>
       <Newsletter></Newsletter>
      
    </div>
  );
};

export default Home;
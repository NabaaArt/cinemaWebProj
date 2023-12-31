import MainHeader from "./component/header/header";
import Home from "./component/home/home";
import home1img from "./images/home/home1.jpg";
import home2img from "./images/home/home2.jpg";

//import 'boxicons';
import Movies from "./component/movies/movies";
import Coming from "./component/coming/coming";
import NewsLetter from "./component/newsLetter/newsLetter";
import Footer from "./component/footer/footer";

import React, { useState, useEffect } from "react";

//import 'swiper/swiper.min.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMoviesRequest = async () => {
    setLoading(true);
    try {
      const url = 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies';
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      setMovies(responseJson.Movies);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMoviesRequest();
  }, []);
  return (
    <div>
      <MainHeader />
      <Home />
      <Movies movies={movies} />
      <Coming />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;

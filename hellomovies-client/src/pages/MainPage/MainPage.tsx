import React, { useState } from "react";
import {
  Footer,
  Header,
  MovieList,
  SingleMovie,
  Welcome,
} from "../../components";
import "../../assets/styles/main.scss";
import { ISingleMovieObject } from "../../interfaces";

const MainPage = () => {
  const [singleMovie, setSingleMovie] = useState<boolean>(false);
  const [singleContent, setSingleContent] = useState<any>({});

  const showSingleMovie = (item: ISingleMovieObject) => {
    setSingleMovie(true);
    setSingleContent(item);
  };

  const goBack = () => {
    setSingleMovie(false);
    setSingleContent({});
  };

  return (
    <div className="container">
      <Header />
      {singleMovie ? (
        <SingleMovie singleContent={singleContent} goBack={goBack} />
      ) : (
        <>
          <Welcome />
          <MovieList showSingleMovie={showSingleMovie} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default MainPage;

import React from "react";
import "../../assets/styles/main.scss";
import { ReactComponent as MovieIcon } from "../../assets/images/icons/movie.svg";
import { ReactComponent as TvIcon } from "../../assets/images/icons/tv.svg";
import { SearchBar2 } from "../Searchbar";

const Welcome = () => {
  return (
    <section className="welcome">
      <h1>Need help finding the next movie?</h1>
      <p className="welcome__text">
        Search for your next movie through HelloMovie’s huge movie library
      </p>
      <SearchBar2 />

      <div className="welcome__icons">
        <div>
          <MovieIcon className="svg__orange" />
          <p>Movies</p>
        </div>
        <div>
          <TvIcon className="svg__orange" />
          <p>TV Shows</p>
        </div>
      </div>

      <div className="notFound">
        <p>No results found for "Hollywood today"</p>
      </div>
    </section>
  );
};

export default Welcome;

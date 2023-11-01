import React, { useState } from "react";
import "../../assets/styles/movielist.scss";
import { ReactComponent as VGridIcon } from "../../assets/images/icons/vertical-cards-icon.svg";
import { ReactComponent as HGridIcon } from "../../assets/images/icons/horizontal-cards-icon.svg";
import StarIcon from "../../assets/images/icons/star-icon.svg";

import Img1 from "../../assets/images/temp/king kong.jpg";
import Img2 from "../../assets/images/temp/tulsa king.jpg";
import Img3 from "../../assets/images/temp/woman King.jpg";
import Img4 from "../../assets/images/temp/the king.jpg";
import { IMainPageProps } from "../../interfaces";
import { Button } from "../Button";

const MovieList: React.FC<IMainPageProps> = ({ showSingleMovie }) => {
  const [vGrid, setVGrid] = useState<boolean>(true);
  const [hGrid, setHGrid] = useState<boolean>(false);

  const activateVGrid = () => {
    setVGrid(true);
    setHGrid(false);
  };

  const activateHGrid = () => {
    setVGrid(false);
    setHGrid(true);
  };

  const test = [
    {
      title: "TULSA KING",
      genre: ["Crime", "Drama"],
      time: "128 min",
      imdb: "7.3",
      year: "2022",
      imgSrc: Img2,
      desc: "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
      director: "Peter Jackson",
      actors: [
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart",
        "Michael Caine",
      ],
    },

    {
      title: "THE WOMAN KING",
      genre: ["Action", "Drama", "History"],
      time: "135 min",
      imdb: "7.3",
      year: "2022",
      imgSrc: Img3,
      desc: "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
      director: "Peter Jackson",
      actors: [
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart",
        "Michael Caine",
      ],
    },
    {
      title: "THE KING",
      genre: ["Crime", "Drama"],
      time: "98 min",
      imdb: "7.3",
      year: "2022",
      imgSrc: Img4,
      desc: "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
      director: "Peter Jackson",
      actors: [
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart",
        "Michael Caine",
      ],
    },
    {
      title: "KING KONG",
      genre: ["Action", "Adventure", "Drama"],
      time: "187 min",
      imdb: "7.3",
      year: "2005",
      imgSrc: Img1,
      desc: "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
      director: "Peter Jackson",
      actors: [
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart",
        "Michael Caine",
      ],
    },
  ];

  return (
    <section className="movies">
      <div className="movies__top">
        <p>
          Found <span>112</span> Movies
        </p>
        <div className="movies__top__layout">
          <p>layout:</p>
          <div
            className={vGrid ? "grid__active" : "grid__inactive"}
            onClick={activateVGrid}
          >
            <VGridIcon />
          </div>

          <div
            className={hGrid ? "grid__active" : "grid__inactive"}
            onClick={activateHGrid}
          >
            <HGridIcon />
          </div>
        </div>
      </div>
      <div className={vGrid ? "movies__list__v" : "movies__list__h"}>
        {test.map((x, i) => (
          <div
            key={i}
            onClick={() => {
              showSingleMovie(x);
            }}
          >
            <div
              className={
                vGrid ? "movies__list__v__img" : "movies__list__h__img"
              }
            >
              <img src={x.imgSrc} alt="movie" />
              <p>{x.year}</p>
            </div>

            <div
              className={
                vGrid ? "movies__list__v__genre" : "movies__list__h__genre"
              }
            >
              <h3>{x.title}</h3>
              <p>
                {x.genre.join(", ")} <span>.</span> {x.time}
              </p>
            </div>
            <div
              className={
                vGrid ? "movies__list__v__rating" : "movies__list__h__rating"
              }
            >
              <p>IMDb:</p>
              <img src={StarIcon} alt="star icon" />
              <p>{x.imdb}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="movies__top">
        <p>
          Showing 1 to 20 of <span>112</span> results
        </p>
        <div className="movies__btns">
          <Button
            title="Previous"
            onClick={() => {
              console.log("Previous");
            }}
          />
          <Button
            title="Next"
            onClick={() => {
              console.log("Next");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MovieList;

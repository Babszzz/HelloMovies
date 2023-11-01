import React from "react";
import { ISingleMovieProps } from "../../interfaces";
import "../../assets/styles/movielist.scss";
import { ReactComponent as BackIcon } from "../../assets/images/icons/arrow.svg";
import StarIcon from "../../assets/images/icons/star-icon.svg";
import { Button } from "../Button";

const SingleMovie: React.FC<ISingleMovieProps> = ({
  singleContent,
  goBack,
}) => {
  console.log(singleContent);
  return (
    <div className="single">
      <div className="single__main">
        <div className="single__main__img">
          <img src={singleContent.imgSrc} alt="movie" />
          <p>{singleContent.year}</p>
        </div>
        <div className="single__main__details">
          <h2>{singleContent.title}</h2>
          <p>{singleContent.desc}</p>
          <div className="single__main__details__flex">
            <div className="single__main__details__flex__genre">
              {singleContent.genre.map((x: string) => (
                <p key={x}>{x}</p>
              ))}
              <p>
                <span>{singleContent.time}</span>
              </p>
            </div>
            <div className="single__main__details__flex__rating">
              <p>IMDb:</p>
              <img src={StarIcon} alt="star icon" />
              <p>{singleContent.imdb}</p>
            </div>
          </div>
          <div className="single__main__details__grid">
            <p className="single__main__details__grid__title">Director:</p>
            <p>{singleContent.director}</p>
            <p className="single__main__details__grid__title">Actors:</p>
            <div>
              {singleContent.actors.map((y: string) => (
                <p>{y}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Button title="Back To Results" onClick={goBack} icon={<BackIcon />} />
    </div>
  );
};

export default SingleMovie;

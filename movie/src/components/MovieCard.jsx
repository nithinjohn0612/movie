import React from "react";

const MovieCard = ({ movie }) => {
  const onlikeBtnClick = () => {};
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="like-btn" onClick={onlikeBtnClick}>
            #
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;

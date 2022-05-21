import React from "react";

const MovieCard = ({ movies, favoriteComponent, handleFavoritesClick }) => {
  const FavoriteComponent = favoriteComponent;

  return (
    <>
      {movies.map((movie, index) => (
        <div className="movie" key={index}>
          <div>
            <p>{movie.Year}</p>
          </div>

          <div>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie.Title}
            />
          </div>

          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>

          {/* overlay  */}
          <div className="overlay" onClick={() => handleFavoritesClick(movie)}>
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;

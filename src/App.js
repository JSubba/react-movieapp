import React, { useState, useEffect } from "react";

import MovieCard from "./components/MovieCard";
import SearchIcon from "./assets/images/search.svg";
import MovieTitle from "./components/MovieTitle";
import AddFavorites from "./components/AddFavorites";
import RemoveFavorites from "./components/RemoveFavorites";
import "./App.css";

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [search, setSearch] = useState("toy story");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(search);
  }, [search]);

  const addToFavorites = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  };

  const removeFromFavorites = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
  };

  return (
    <div className="app">
      <h1>EigaLand Movies</h1>

      <div className="search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          <MovieCard
            movies={movies}
            favoriteComponent={AddFavorites}
            handleFavoritesClick={addToFavorites}
          />
        </div>
      ) : (
        <div className="empty">
          <h2>Oooops... No movies found!!</h2>
        </div>
      )}
      {favorites.length > 0 && <MovieTitle title="Favorites" />}
      <div className="container">
        <MovieCard
          movies={favorites}
          favoriteComponent={RemoveFavorites}
          handleFavoritesClick={removeFromFavorites}
        />
      </div>
    </div>
  );
};

export default App;

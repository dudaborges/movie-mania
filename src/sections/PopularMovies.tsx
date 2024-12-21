import React, { useEffect, useState } from "react";
import '../styles/sections/popular-movies.css'
import { fetchMovies } from "../services/movieService";
import { Movie } from "../types/movie";
import MovieCard from "../components/MovieCard";
import PopUpMovie from "../components/PopUpMovie";

const PopularMovies: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const getPopularMovies = async () => {
    const { movies } = await fetchMovies(1); 
    setPopularMovies(movies);
  };

  const handleShowPopup = (movie: Movie) => {
    setSelectedMovie(movie);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <section id="popular-movies-section" className="padding-100">
      <h1 id="popular-title" className="title-main padding-20">Filmes Mais Populares do Momento</h1>
      <div className="container-catalog">
        {popularMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            srcImg={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            onShowPopup={() => handleShowPopup(movie)} 
          />
        ))}
      </div>
      {isPopupVisible && selectedMovie && (
        <PopUpMovie
          movie={selectedMovie}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
};

export default PopularMovies;

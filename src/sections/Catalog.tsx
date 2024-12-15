import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/movieService';
import { Movie } from '../types/movie';
import MovieCard from '../components/MovieCard';
import PopUpMovie from '../components/PopUpMovie';
import '../styles/sections/catalog.css';

const Catalog: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); 
  const [isPopupVisible, setPopupVisible] = useState(false); 

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  const handleShowPopup = (movie: Movie) => {
    setSelectedMovie(movie);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <section id="catalog-section" className="padding-50">
      <div className="container-catalog">
        {movies.map((movie) => (
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

export default Catalog;


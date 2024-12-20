import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/movieService';
import { Movie } from '../types/movie';
import MovieCard from '../components/MovieCard';
import PopUpMovie from '../components/PopUpMovie';
import '../styles/sections/catalog.css';
import Pagination from '../components/Pagination';

const Catalog: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);  
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); 
  const [isPopupVisible, setPopupVisible] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0);  

  const getMovies = async (page: number) => {
    const { movies, totalPages } = await fetchMovies(page);  
    setMovies(movies);  
    setTotalPages(totalPages); 
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);  

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
      {totalPages > 1 && (
        <div className="pagination-container flex-center flex__gap-10">
          <Pagination pages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </section>
  );
};

export default Catalog;

import React, { useEffect, useState } from 'react';
import { fetchMovies, fetchAllMovies } from '../services/movieService';
import { Movie } from '../types/movie';
import MovieCard from '../components/MovieCard';
import PopUpMovie from '../components/PopUpMovie';
import '../styles/sections/catalog.css';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const Catalog: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getMovies = async (page: number) => {
    const { movies, totalPages } = await fetchMovies(page);
    setMovies(movies);
    setTotalPages(totalPages);
  };

  const loadAllMovies = async () => {
    const all = await fetchAllMovies();
    setAllMovies(all);
  };

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredMovies([]);
      return;
    }
    const results = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(results);
  };

  useEffect(() => {
    getMovies(currentPage);
    loadAllMovies();
  }, [currentPage]);

  const handleShowPopup = (movie: Movie) => {
    setSelectedMovie(movie);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <section className="padding-50 catalog-section">
      <div id="part-search" className="flex-center full-wd">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="container-catalog">
        {(filteredMovies.length > 0 ? filteredMovies : movies).map((movie) => (
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
      {totalPages > 1 && !filteredMovies.length && (
        <div className="pagination-container flex-center flex__gap-10">
          <Pagination pages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </section>
  );
};

export default Catalog;

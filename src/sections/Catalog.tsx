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
  const [itensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(movies.length / itensPerPage) 
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentMovies = movies.slice(startIndex, endIndex)

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
        {currentMovies.map((movie) => (
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
    <div className='pagination-container flex-center flex__gap-10'>
    {Array.from(Array(pages), (item, index) => {
        return (
            <button
            className='pagination-btn'
            value={index}
            onClick={(e) => {
                setCurrentPage(Number((e.target as HTMLButtonElement).value));
                const section = document.getElementById('home-section');
                if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                }
            }}
            >
            {index}
            </button>
        );
    })}

    </div>
    </section>
  );
};

export default Catalog;


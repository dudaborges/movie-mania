import MovieCard from '../components/MovieCard'
import '../styles/sections/catalog.css'
import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/movieService';
import { Movie } from '../types/movie';

const Catalog: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <section id='catalog-section' className="padding-50">
      <div className="container-catalog">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            srcImg={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Catalog;


import { api } from './api';
import { Movie } from '../types/movie';

export const fetchMovies = async (page: number): Promise<{ movies: Movie[], totalPages: number }> => {
  try {
    const response = await api.get('/discover/movie', {
      params: {
        language: 'pt-BR',
        page: page,  
        sort_by: 'popularity.desc', 
      },
    });

    const movies = response.data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      overview: movie.overview,
      release_date: movie.release_date,
    }));

    const totalPages = Math.min(response.data.total_pages, 20);

    return { movies, totalPages };
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return { movies: [], totalPages: 0 };
  }
};

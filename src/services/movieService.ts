import { api } from './api';
import { Movie } from '../types/movie';

export const fetchMovies = async (): Promise<Movie[]> => {
    try {
        const response = await api.get('/movie/popular', {
            params: {
                language: 'pt-BR',  
            },
        });  
      return response.data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        overview: movie.overview,
        release_date: movie.release_date,
      }));
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      return [];
    }
  };
  

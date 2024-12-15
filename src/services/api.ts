import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3', 
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzJjNzk2YmE3MDhjMjFiNTI4OGQ5MTYxZjZmYTQ3YyIsIm5iZiI6MTczNDI3MjI3OC4wNzcsInN1YiI6IjY3NWVlNTE2OTc3YjlmMjZhNDE4YTMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kTnAA2NaR4ZTusvvaUVjn7YfU2t0ZAu6Xw9Rq3I_JLc`, 
  },
});

import axios from 'axios';
import { omdbApi } from '../../config';
import { SearchResponse } from './searchModels';

export function fetchMovies(search: string) {
  return axios.get<SearchResponse>(`${omdbApi}s=${search}`)
    .then(({data}) => data);
}

export function fetchMoviesWithPage(search: string, page: number) {
  return axios.get<SearchResponse>(`${omdbApi}s=${search}&page=${page}`)
    .then(({data}) => data);
}

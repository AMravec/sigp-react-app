import axios from 'axios';
import { omdbApi } from '../../config';
import { DetailMovie } from './detailModels';

export function fetchDetailMovie(id: string) {
  return axios.get<DetailMovie>(`${omdbApi}i=${id}`)
    .then(({data}) => data);
}

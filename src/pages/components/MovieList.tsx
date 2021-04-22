import React from 'react';
import { Spin } from 'antd';
import MovieListItem from './MovieListItem';
import { SearchMovie } from '../../redux/search/searchModels';

interface MovieListProps {
  loading?: boolean;
  movies: SearchMovie[];
}

const MovieList: React.FC<MovieListProps> = ({ loading, movies }) => {
  return (<div className="mt-4 p-4">
    {loading && <div className="is-flex is-justify-content-center"><Spin size="large" /></div>}
    {!loading  && <div className="movie-list">
      {movies.map(movie => (
        <MovieListItem key={movie.imdbID} movie={movie} />
      ))}
    </div>}
  </div>)
};

export default MovieList;

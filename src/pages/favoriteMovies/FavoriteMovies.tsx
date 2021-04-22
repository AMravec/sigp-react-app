import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { SearchMovie } from '../../redux/search/searchModels';
import { getFavoriteMovies } from '../../redux/common';

const FavoriteMovies: React.FC = () => {
  const [movies, setMovies] = useState<SearchMovie[]>([]);

  useEffect(() => {
    setMovies(getFavoriteMovies());
  }, []);

  return (<div className="container is-max-widescreen">
      <div className="mt-6">
        <div className="p-4">
          <h3 className="is-size-3 has-text-centered">My favorite movies</h3>
        </div>
      </div>
      <MovieList movies={movies} />
  </div>)
};

export default FavoriteMovies;

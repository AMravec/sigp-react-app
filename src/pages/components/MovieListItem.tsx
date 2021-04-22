import React from 'react';
import { Link } from 'react-router-dom';
import { SearchMovie } from '../../redux/search/searchModels';
import { routes } from '../../routes.config';

interface MovieListItemProps {
  movie: SearchMovie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const { Title, Type, Year, Poster, imdbID } = movie;
  return (<div className="movie-list-item">
    <div className="is-flex is-justify-content-space-between">
      <div className="is-flex">
        <img className="movie-list-item-poster" src={Poster} alt={Title} />
        <div className="is-flex is-flex-direction-column ml-3">
          <h4 className="is-size-4">{Title}</h4>
          <p>Type: {Type}</p>
          <p>Year: {Year}</p>
        </div>
      </div>

      <div className="is-flex is-align-items-center pl-3">
        <Link to={`${routes.detail}/${imdbID}`} className="button">Detail</Link>
      </div>
    </div>
  </div>)
};

export default MovieListItem;

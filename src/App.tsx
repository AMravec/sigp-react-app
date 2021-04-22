import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes.config';

import Navbar from './components/Navbar';
import MovieSearch from './pages/movieSearch/MovieSearch';
import MovieDetail from './pages/movieDetail/MovieDetail';
import FavoriteMovies from './pages/favoriteMovies/FavoriteMovies';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={`${routes.detail}/:id`} ><MovieDetail /></Route>
        <Route path={routes.favorite} ><FavoriteMovies /></Route>
        <Route path={routes.search} ><MovieSearch /></Route>
      </Switch>
    </>
  );
}

export default App;

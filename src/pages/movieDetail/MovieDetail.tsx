import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loadMovieDetail, selectMovieDetail, selectLoading } from '../../redux/detail/detailSlice';
import FavoriteButton from './components/FavoriteButton';


const MovieDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const movieDetail = useAppSelector(selectMovieDetail);
  const loading = useAppSelector(selectLoading);
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(loadMovieDetail(id))
  }, [dispatch, id]);

  return (<div className="mt-4 p-4 container is-max-widescreen">
    {loading && <div className="is-flex is-justify-content-center"><Spin size="large" /></div>}
    {movieDetail && <div className="movie-detail">
      <div className="columns is-multiline">
        <div className="column is-full-mobile is-one-third-tablet">
          <div className="is-flex is-justify-content-center">
            <img src={movieDetail.Poster} alt={movieDetail.Title} />
          </div>
        </div>

        <div className="column">
          <div className="is-flex is-flex-direction-column p-4">
            <h4 className="is-size-4 has-text-centered-mobile"><FavoriteButton className="mr-3" />{movieDetail.Title} <span className="is-size-6">({movieDetail.Year})</span></h4>
            <div className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">imdb rating</p>
                  <p className="title">{movieDetail.imdbRating}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">imdb votes</p>
                  <p className="title">{movieDetail.imdbVotes}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">box office</p>
                  <p className="title">{movieDetail.BoxOffice}</p>
                </div>
              </div>
            </div>
            <p className="mb-1"><b>Type:</b> {movieDetail.Type}</p>
            <p className="mb-1"><b>Released:</b> {movieDetail.Released}</p>
            <p className="mb-1"><b>DVD:</b> {movieDetail.DVD}</p>
            <p className="mb-1"><b>Time:</b> {movieDetail.Runtime}</p>
            <p className="mb-1"><b>Genre:</b> {movieDetail.Genre}</p>
            <p className="mb-1"><b>Director:</b> {movieDetail.Director}</p>
            <p className="mb-1"><b>Writer:</b> {movieDetail.Writer}</p>
            <p className="mb-1"><b>Actors:</b> {movieDetail.Actors}</p>
            <p className="mb-1"><b>Plot:</b> {movieDetail.Plot}</p>
            <p className="mb-1"><b>Language:</b> {movieDetail.Language}</p>
          </div>
        </div>
      </div>
    </div>}
  </div >)
};

export default MovieDetail;

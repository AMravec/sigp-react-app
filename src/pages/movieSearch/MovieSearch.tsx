import React, { useCallback } from 'react';
import { Pagination } from 'antd';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import SearchField from './components/SearchField';
import MovieList from '../components/MovieList';
import { selectLoading, selectResult, selectTotal, selectPage, setPage } from '../../redux/search/searchSlice';

const MovieSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const movies = useAppSelector(selectResult);
  const total = useAppSelector(selectTotal);
  const page = useAppSelector(selectPage);

  const onChangePagination = useCallback((page) => {
    dispatch(setPage(page));
  }, [dispatch]);

  return (<div className="container is-max-widescreen">
    <div className="mt-6">
      <div className="p-4">
        <SearchField />
      </div>
    </div>
    <MovieList loading={loading} movies={movies} />
    {movies && <div className="is-flex is-justify-content-center pb-4">
      <Pagination current={page} pageSize={10} pageSizeOptions={[]} onChange={onChangePagination} total={total} />
    </div>}
  </div>)
};

export default MovieSearch;

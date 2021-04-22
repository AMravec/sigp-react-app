import { call, put, takeLatest, select  } from 'redux-saga/effects';
import { setSearch, setData, resetData, setPage } from './searchSlice';
import { fetchMovies, fetchMoviesWithPage } from './searchAPI';
import { SearchResponse } from './searchModels';

function* fetchSearch(action: any) {
  if(action.payload) {
    const movies: SearchResponse = yield call(fetchMovies, action.payload);
    yield put(setData(movies));
  } else {
    yield put(resetData());
  }  
}

function* changePage(action: any) {
  if(action.payload) {
    const search: string = yield select((state) => state.search.search);
    const movies: SearchResponse = yield call(fetchMoviesWithPage, search, action.payload);
    yield put(setData(movies));
  } 
}

function* searchSaga() {
  yield takeLatest(setSearch, fetchSearch);
  yield takeLatest(setPage, changePage);
}

export default searchSaga;
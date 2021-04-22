import { all } from 'redux-saga/effects';
import searchSaga from './search/searchSaga';
import detailSaga from './detail/detailSaga';

export default function* rootSaga() {
    yield all([
      searchSaga(),
      detailSaga(),
    ])
  }
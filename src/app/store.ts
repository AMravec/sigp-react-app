import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import searchReducer from '../redux/search/searchSlice';
import detailReducer from '../redux/detail/detailSlice';
import rootSaga from '../redux/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    search: searchReducer,
    detail: detailReducer,
  },
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { SearchMovie, SearchResponse } from './searchModels';

export interface SearchState {
  search: string;
  loading: boolean;
  result: SearchMovie[];
  total: number;
  page: number;
}

const initialState: SearchState = {
  search: '',
  loading: false,
  result: [],
  total: 0,
  page: 1,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.search = action.payload;
      state.page = 1;
      state.total = 0;
    },
    setData: (state, action: PayloadAction<SearchResponse>) => {
      state.result = action.payload.Search;
      state.total = +action.payload.totalResults;
      state.loading = false;
    },
    resetData: (state, action: PayloadAction) => {
      state.result = [];
      state.total = 0;
      state.page = 1;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setSearch, setData, resetData, setPage, setTotal } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.search;
export const selectLoading = (state: RootState) => state.search.loading;
export const selectResult = (state: RootState) => state.search.result;
export const selectTotal = (state: RootState) => state.search.total;
export const selectPage = (state: RootState) => state.search.page;

export default searchSlice.reducer;

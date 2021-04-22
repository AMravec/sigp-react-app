import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { DetailMovie } from './detailModels';

export interface DetailState {
  id: string;
  loading: boolean;
  favorite: boolean;
  data: DetailMovie | undefined;
}

const initialState: DetailState = {
  id: '',
  loading: false,
  favorite: false,
  data: undefined,
};

export const saveFavoriteMovie = createAction<DetailMovie>('saveFavoriteMovie');
export const removeFavoriteMovie = createAction<string>('removeFavoriteMovie');

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    loadMovieDetail: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.id = action.payload;
    },
    setMovieDetailData: (state, action: PayloadAction<DetailMovie | undefined>) => {
      state.data = action.payload;
      state.loading = false;      
    },
    resetMovieDetailData: (state, action: PayloadAction) => {
      state.data = undefined;     
    },
    setFavorite: (state, action: PayloadAction<boolean>) => {
      state.favorite = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveFavoriteMovie, (state, action) => {})
      .addCase(removeFavoriteMovie, (state, action) => {})
      .addDefaultCase((state, action) => {})
  },
});

export const { loadMovieDetail, setMovieDetailData, setFavorite, resetMovieDetailData } = detailSlice.actions;

export const selectLoading = (state: RootState) => state.detail.loading;
export const selectFavorite = (state: RootState) => state.detail.favorite;
export const selectMovieDetail = (state: RootState) => state.detail.data;

export default detailSlice.reducer;

import { SearchMovie } from "./search/searchModels";

export const localStorageFavoriteMovies = 'favoriteMovies';

export function getFavoriteMovies(): SearchMovie[] {
  let favoriteMovies: SearchMovie[] = [];
  const data = localStorage.getItem(localStorageFavoriteMovies);
  if(data){
    favoriteMovies = JSON.parse(data);
  }
  return favoriteMovies;
}
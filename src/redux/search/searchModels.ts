export interface SearchMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchResponse {
  Response: string;
  Search: SearchMovie[];
  totalResults: string;
}
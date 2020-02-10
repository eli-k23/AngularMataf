export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: Type;
  Poster: string;
}

export enum Type {
  Movie = "movie"
}

export interface MovieDesc {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: Rating[];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
}

export interface Rating {
  source: string;
  value: string;
}

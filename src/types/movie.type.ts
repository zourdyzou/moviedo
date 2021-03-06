import { AxiosResponse } from "axios";

export interface MovieData {}

export type Movie = "upcoming" | "popular" | "top_rated";
export type TV = "popular" | "top_rated" | "on_the_air";
export type Category = "movie" | "tv";

export interface MovieData {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
  name: string;
  revenue: number;
  status: string;
  vote_count: number;
  vote_average: number;
}

export interface ResponseData extends AxiosResponse {
  results: MovieData[];
}
export interface TmdbAPI {
  getMovieList(type: Movie, params: object): Promise<ResponseData>;
  getTvList(type: TV, params: object): Promise<ResponseData>;
  getVideos(type: Category, id: number): Promise<ResponseData>;
  search(type: Category, params: object): Promise<ResponseData>;
  detail(type: Category, id: number, params: object): Promise<ResponseData>;
  credits(type: Category, id: number): Promise<ResponseData>;
  similar(type: Category, id: number): Promise<ResponseData>;
}

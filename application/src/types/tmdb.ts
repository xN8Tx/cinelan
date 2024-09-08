export type GenreTMDB = {
  id: number;
  name: string;
};

export type BelongsToCollectionTMDB = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type ProductionCompanyTMDB = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type ProductionCountryTMDB = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguageTMDB = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieTMDB = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollectionTMDB | null;
  budget: number;
  genres: GenreTMDB[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanyTMDB[];
  production_countries: ProductionCountryTMDB[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguageTMDB[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};


export type Gender = "male" | "female" | "hermaphrodite" | "n/a" | "none" | "unknown" | string;

export interface Person {
  name: string;
  birth: string;
  gender: Gender;
  eyeColor: string;
  image: string;
  films: string[];
  homeworld: string;
  species: string[];
  starships: string[];
}

export interface Pagination {
  next: boolean;
  previous: boolean;
}

export interface PersonsApiResponse {
  persons: Person[];
  pagination: Pagination;
}

export interface Movie {
  name: string;
  description: string;
  releaseDate: string;
}

export interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

export interface Species {
  name: string;
  classification: string;
  language: string;
  averageLifespan: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  starshipClass: string;
}

export interface ApiErrorResponse {
  message: string;
}

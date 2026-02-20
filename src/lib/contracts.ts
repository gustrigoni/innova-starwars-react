export type Gender = "male" | "female" | "hermaphrodite" | "n/a" | "none" | "unknown" | string;

export interface Person {
  name: string;
  birth: string;
  gender: Gender;
  eyeColor: string;
  image: string;
  films: string[];
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

export interface ApiErrorResponse {
  message: string;
}

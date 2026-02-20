export interface PersonInterface {
  name: string;
  birth: string;
  gender: string;
  eyeColor: string;
  image: string;
  films?: string[];
}

export interface Pagination {
  next?: true;
  previous?: true;
}

export interface PersonsApiResponse {
  persons: PersonInterface[];
  pagination: Pagination;
}

export interface Movie {
  name: string;
  description: string;
  releaseDate: string;
}

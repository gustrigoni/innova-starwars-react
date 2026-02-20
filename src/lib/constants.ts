export const APP_ROUTES = {
  home: "/",
  search: "/search",
  character: "/character",
} as const;

export const API_ROUTES = {
  persons: "/api/persons",
  movies: "/api/movies",
  planets: "/api/planets",
  species: "/api/species",
  starships: "/api/starships",
} as const;

export const FALLBACK_PERSON_IMAGE = "https://akabab.github.io/starwars-api/api/id/1.jpg";

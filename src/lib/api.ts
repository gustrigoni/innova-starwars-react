import { API_ROUTES } from "./constants";
import type {
  ApiErrorResponse,
  Movie,
  Person,
  PersonsApiResponse,
  Planet,
  Species,
  Starship,
} from "./contracts";
import { normalizeName } from "./formatters";

async function parseResponse<T>(response: Response): Promise<T> {
  const payload = (await response.json()) as T | ApiErrorResponse;

  if (!response.ok) {
    const errorPayload = payload as ApiErrorResponse;
    throw new Error(errorPayload.message || "Request failed.");
  }

  return payload as T;
}

function createUrlQuery(urls: string[]): string {
  const query = new URLSearchParams();
  urls.forEach((url) => query.append("url", url));
  return query.toString();
}

async function fetchResourcesByUrls<T>(route: string, urls: string[]): Promise<T[]> {
  if (urls.length === 0) {
    return [];
  }

  const response = await fetch(`${route}?${createUrlQuery(urls)}`);
  return parseResponse<T[]>(response);
}

export async function fetchPersons(params: { page: number; name?: string }): Promise<PersonsApiResponse> {
  const { page, name } = params;
  const path = name ? `${API_ROUTES.persons}/${encodeURIComponent(name)}` : API_ROUTES.persons;
  const response = await fetch(`${path}?page=${page}`);

  return parseResponse<PersonsApiResponse>(response);
}

export async function fetchPersonByName(name: string): Promise<Person | null> {
  const response = await fetchPersons({ page: 1, name });
  const targetName = normalizeName(name);

  const exactMatch = response.persons.find((person) => normalizeName(person.name) === targetName);
  if (exactMatch) {
    return exactMatch;
  }

  return response.persons[0] ?? null;
}

export async function fetchMovies(urls: string[]): Promise<Movie[]> {
  return fetchResourcesByUrls<Movie>(API_ROUTES.movies, urls);
}

export async function fetchPlanets(urls: string[]): Promise<Planet[]> {
  return fetchResourcesByUrls<Planet>(API_ROUTES.planets, urls);
}

export async function fetchSpecies(urls: string[]): Promise<Species[]> {
  return fetchResourcesByUrls<Species>(API_ROUTES.species, urls);
}

export async function fetchStarships(urls: string[]): Promise<Starship[]> {
  return fetchResourcesByUrls<Starship>(API_ROUTES.starships, urls);
}

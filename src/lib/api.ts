import { API_ROUTES } from "./constants";
import type { ApiErrorResponse, Movie, Person, PersonsApiResponse } from "./contracts";
import { normalizeName } from "./formatters";

async function parseResponse<T>(response: Response): Promise<T> {
  const payload = (await response.json()) as T | ApiErrorResponse;

  if (!response.ok) {
    const errorPayload = payload as ApiErrorResponse;
    throw new Error(errorPayload.message || "Request failed.");
  }

  return payload as T;
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
  if (urls.length === 0) {
    return [];
  }

  const query = new URLSearchParams();
  urls.forEach((url) => query.append("url", url));

  const response = await fetch(`${API_ROUTES.movies}?${query.toString()}`);
  return parseResponse<Movie[]>(response);
}

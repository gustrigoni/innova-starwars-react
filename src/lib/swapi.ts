import type { Movie, Person, PersonsApiResponse } from "./contracts";
import { normalizeName, toHttps } from "./formatters";

const SWAPI_BASE_URL = "https://swapi.dev/api";
const AKABAB_ALL_CHARACTERS_URL = "https://akabab.github.io/starwars-api/api/all.json";

interface SwapiListResponse<T> {
  next: string | null;
  previous: string | null;
  results: T[];
}

interface SwapiPerson {
  name: string;
  birth_year: string;
  gender: string;
  eye_color: string;
  films: string[];
}

interface SwapiFilm {
  title: string;
  opening_crawl: string;
  release_date: string;
}

interface AkababPerson {
  name: string;
  image: string;
}

let personImagesPromise: Promise<Map<string, string>> | null = null;

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`API error (${response.status}): ${url}`);
  }

  return (await response.json()) as T;
}

async function getPersonImagesMap(): Promise<Map<string, string>> {
  if (!personImagesPromise) {
    personImagesPromise = fetchJson<AkababPerson[]>(AKABAB_ALL_CHARACTERS_URL).then((people) => {
      const imagesMap = new Map<string, string>();

      people.forEach((person) => {
        imagesMap.set(normalizeName(person.name), person.image);
      });

      return imagesMap;
    });
  }

  return personImagesPromise;
}

function mapPagination(data: SwapiListResponse<unknown>) {
  return {
    previous: Boolean(data.previous),
    next: Boolean(data.next),
  };
}

async function mapSwapiPerson(person: SwapiPerson): Promise<Person> {
  const imageByName = await getPersonImagesMap();

  return {
    name: person.name,
    birth: person.birth_year,
    gender: person.gender,
    eyeColor: person.eye_color,
    image: imageByName.get(normalizeName(person.name)) ?? "",
    films: (person.films ?? []).map((filmUrl) => toHttps(filmUrl)),
  };
}

async function buildPersonsResponse(data: SwapiListResponse<SwapiPerson>): Promise<PersonsApiResponse> {
  const persons = await Promise.all(data.results.map((person) => mapSwapiPerson(person)));

  return {
    persons,
    pagination: mapPagination(data),
  };
}

function sanitizePage(page: number): number {
  return Number.isFinite(page) && page > 0 ? page : 1;
}

export async function listPersons(page: number): Promise<PersonsApiResponse> {
  const safePage = sanitizePage(page);
  const data = await fetchJson<SwapiListResponse<SwapiPerson>>(`${SWAPI_BASE_URL}/people/?page=${safePage}`);

  return buildPersonsResponse(data);
}

export async function searchPersonsByName(term: string, page: number): Promise<PersonsApiResponse> {
  const query = term.trim();
  const safePage = sanitizePage(page);

  if (!query) {
    return listPersons(safePage);
  }

  const data = await fetchJson<SwapiListResponse<SwapiPerson>>(
    `${SWAPI_BASE_URL}/people/?search=${encodeURIComponent(query)}&page=${safePage}`
  );

  return buildPersonsResponse(data);
}

export async function listMoviesByUrls(urls: string[]): Promise<Movie[]> {
  const uniqueUrls = Array.from(new Set(urls)).filter(Boolean).map((url) => toHttps(url));

  return Promise.all(
    uniqueUrls.map(async (url) => {
      const film = await fetchJson<SwapiFilm>(url);

      return {
        name: film.title,
        description: film.opening_crawl,
        releaseDate: film.release_date,
      };
    })
  );
}

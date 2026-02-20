import type { Movie, PersonInterface, PersonsApiResponse } from "./contracts";

const SWAPI_BASE = "https://swapi.dev/api";
const AKABAB_ALL_URL = "https://akabab.github.io/starwars-api/api/all.json";

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

let imagesPromise: Promise<Map<string, string>> | null = null;

function normalizeName(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function toHttps(url: string): string {
  return url.replace(/^http:\/\//i, "https://");
}

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

async function getImagesMap(): Promise<Map<string, string>> {
  if (!imagesPromise) {
    imagesPromise = fetchJson<AkababPerson[]>(AKABAB_ALL_URL).then((data) => {
      const map = new Map<string, string>();
      data.forEach((person) => {
        map.set(normalizeName(person.name), person.image);
      });
      return map;
    });
  }

  return imagesPromise;
}

async function mapPerson(person: SwapiPerson): Promise<PersonInterface> {
  const imageMap = await getImagesMap();

  return {
    name: person.name,
    birth: person.birth_year,
    gender: person.gender,
    eyeColor: person.eye_color,
    image: imageMap.get(normalizeName(person.name)) ?? "",
    films: (person.films ?? []).map((url) => toHttps(url)),
  };
}

export async function listPersons(page: number): Promise<PersonsApiResponse> {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;
  const data = await fetchJson<SwapiListResponse<SwapiPerson>>(`${SWAPI_BASE}/people/?page=${safePage}`);

  const persons = await Promise.all(data.results.map((person) => mapPerson(person)));

  return {
    persons,
    pagination: {
      previous: data.previous ? true : undefined,
      next: data.next ? true : undefined,
    },
  };
}

export async function searchPersonsByName(term: string, page: number): Promise<PersonsApiResponse> {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;
  const query = term.trim();

  if (!query) {
    return listPersons(safePage);
  }

  const data = await fetchJson<SwapiListResponse<SwapiPerson>>(
    `${SWAPI_BASE}/people/?search=${encodeURIComponent(query)}&page=${safePage}`
  );

  const persons = await Promise.all(data.results.map((person) => mapPerson(person)));

  return {
    persons,
    pagination: {
      previous: data.previous ? true : undefined,
      next: data.next ? true : undefined,
    },
  };
}

export async function listMoviesByUrls(urls: string[]): Promise<Movie[]> {
  const uniqueUrls = Array.from(new Set(urls)).filter(Boolean).map((url) => toHttps(url));

  const movies = await Promise.all(
    uniqueUrls.map(async (url) => {
      const film = await fetchJson<SwapiFilm>(url);

      return {
        name: film.title,
        description: film.opening_crawl,
        releaseDate: film.release_date,
      };
    })
  );

  return movies;
}

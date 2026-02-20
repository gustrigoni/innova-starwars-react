import type { Gender } from "./contracts";

const GENDER_LABELS: Record<string, string> = {
  male: "masculino",
  female: "feminino",
  hermaphrodite: "hermafrodita",
};

const GENDER_EMOJIS: Record<string, string> = {
  male: "👦",
  female: "👧",
  hermaphrodite: "🦄",
};

export function normalizeName(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export function toHttps(url: string): string {
  return url.replace(/^http:\/\//i, "https://");
}

export function getGenderEmoji(gender: Gender): string {
  const normalized = String(gender).toLowerCase();
  return GENDER_EMOJIS[normalized] ?? "🤖";
}

export function getGenderLabel(gender: Gender): string {
  const normalized = String(gender).toLowerCase();
  return `${getGenderEmoji(normalized)} ${GENDER_LABELS[normalized] ?? "not defined"}`;
}

export function formatReleaseDate(releaseDate: string): string {
  return new Date(releaseDate.replace(/-/g, "/")).toLocaleDateString();
}

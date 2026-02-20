import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { Movies } from "../../components/Movies";
import { useSearch } from "../../SearchContext";
import {
  fetchMovies,
  fetchPersonByName,
  fetchPlanets,
  fetchSpecies,
  fetchStarships,
} from "../../lib/api";
import { APP_ROUTES, FALLBACK_PERSON_IMAGE } from "../../lib/constants";
import type {
  Movie,
  Person as PersonModel,
  Planet,
  Species,
  Starship,
} from "../../lib/contracts";
import { getGenderLabel } from "../../lib/formatters";

import {
  Container,
  Person,
  Picture,
  Name,
  Button,
  About,
  Col,
  Row,
  Info,
  Grid,
  Section,
  SectionTitle,
  SectionBody,
  ResourceCard,
  ResourceName,
  ResourceMeta,
  EmptyState,
  SkeletonCircle,
  SkeletonLine,
  SkeletonCard,
} from "./styles";

function normalizeValue(value: string): string {
  if (!value || value === "unknown" || value === "n/a") {
    return "Unknown";
  }

  return value;
}

function SectionSkeleton({ cards = 2 }: { cards?: number }) {
  return (
    <SectionBody>
      {Array.from({ length: cards }).map((_, index) => (
        <SkeletonCard key={index}>
          <SkeletonLine width="55%" />
          <SkeletonLine width="80%" />
          <SkeletonLine width="72%" />
          <SkeletonLine width="66%" />
        </SkeletonCard>
      ))}
    </SectionBody>
  );
}

export function Profile() {
  const { personData, setPersonData } = useSearch();
  const [character, setCharacter] = useState<PersonModel | null>(null);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [species, setSpecies] = useState<Species[]>([]);
  const [starships, setStarships] = useState<Starship[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const queryName = typeof router.query.name === "string" ? router.query.name.trim() : "";

    async function loadCharacter() {
      try {
        setIsLoading(true);

        let targetCharacter: PersonModel | null = null;

        if (queryName) {
          targetCharacter = await fetchPersonByName(queryName);
        } else if (personData.name) {
          targetCharacter = personData;
        }

        if (!targetCharacter) {
          router.replace(APP_ROUTES.search);
          return;
        }

        setCharacter(targetCharacter);

        if (queryName && targetCharacter.name !== personData.name) {
          setPersonData(targetCharacter);
        }

        const details = await Promise.allSettled([
          fetchMovies(targetCharacter.films),
          fetchPlanets(targetCharacter.homeworld ? [targetCharacter.homeworld] : []),
          fetchSpecies(targetCharacter.species),
          fetchStarships(targetCharacter.starships),
        ]);

        const [moviesResult, planetsResult, speciesResult, starshipsResult] = details;

        setMovies(moviesResult.status === "fulfilled" ? moviesResult.value : []);
        setPlanets(planetsResult.status === "fulfilled" ? planetsResult.value : []);
        setSpecies(speciesResult.status === "fulfilled" ? speciesResult.value : []);
        setStarships(starshipsResult.status === "fulfilled" ? starshipsResult.value : []);

        const hasAnyFailure = details.some((result) => result.status === "rejected");
        if (hasAnyFailure) {
          toast.warning("Some details are currently unavailable.");
        }
      } catch (error) {
        toast.error("Could not load the character.");
        router.replace(APP_ROUTES.search);
      } finally {
        setIsLoading(false);
      }
    }

    loadCharacter();
  }, [router.isReady, router.query.name, personData, router, setPersonData]);

  return (
    <Container>
      <Person>
        {character ? <Picture src={character.image || FALLBACK_PERSON_IMAGE} /> : <SkeletonCircle />}
        <Row>
          {character ? <Name>{character.name}</Name> : <SkeletonLine width="240px" />}
          <Button onClick={() => router.back()}>Back</Button>
        </Row>
      </Person>
      <About>
        <Grid>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <SectionBody>
              {character ? (
                <Col>
                  <Row>
                    <Info label>Birth year:</Info>
                    <Info>🎂 {normalizeValue(character.birth)}</Info>
                  </Row>
                  <Row>
                    <Info label>Eye color:</Info>
                    <Info>👀 {normalizeValue(character.eyeColor)}</Info>
                  </Row>
                  <Row>
                    <Info label>Gender:</Info>
                    <Info>{getGenderLabel(character.gender)}</Info>
                  </Row>
                </Col>
              ) : (
                <>
                  <SkeletonLine width="92%" />
                  <SkeletonLine width="88%" />
                  <SkeletonLine width="78%" />
                </>
              )}
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle>Movies</SectionTitle>
            {isLoading ? (
              <SectionSkeleton />
            ) : (
              <SectionBody>{movies.length > 0 ? <Movies data={movies} /> : <EmptyState>No movies available.</EmptyState>}</SectionBody>
            )}
          </Section>

          <Section>
            <SectionTitle>Planet</SectionTitle>
            {isLoading ? (
              <SectionSkeleton cards={1} />
            ) : (
              <SectionBody>
                {planets.length === 0 ? (
                  <EmptyState>No known planet data.</EmptyState>
                ) : (
                  planets.map((planet) => (
                    <ResourceCard key={planet.name}>
                      <ResourceName>{planet.name}</ResourceName>
                      <ResourceMeta>Climate: {normalizeValue(planet.climate)}</ResourceMeta>
                      <ResourceMeta>Terrain: {normalizeValue(planet.terrain)}</ResourceMeta>
                      <ResourceMeta>Population: {normalizeValue(planet.population)}</ResourceMeta>
                    </ResourceCard>
                  ))
                )}
              </SectionBody>
            )}
          </Section>

          <Section>
            <SectionTitle>Species</SectionTitle>
            {isLoading ? (
              <SectionSkeleton cards={1} />
            ) : (
              <SectionBody>
                {species.length === 0 ? (
                  <EmptyState>No species data available.</EmptyState>
                ) : (
                  species.map((item) => (
                    <ResourceCard key={item.name}>
                      <ResourceName>{item.name}</ResourceName>
                      <ResourceMeta>Classification: {normalizeValue(item.classification)}</ResourceMeta>
                      <ResourceMeta>Language: {normalizeValue(item.language)}</ResourceMeta>
                      <ResourceMeta>Lifespan: {normalizeValue(item.averageLifespan)}</ResourceMeta>
                    </ResourceCard>
                  ))
                )}
              </SectionBody>
            )}
          </Section>

          <Section>
            <SectionTitle>Starships</SectionTitle>
            {isLoading ? (
              <SectionSkeleton cards={1} />
            ) : (
              <SectionBody>
                {starships.length === 0 ? (
                  <EmptyState>No starships linked to this character.</EmptyState>
                ) : (
                  starships.map((starship) => (
                    <ResourceCard key={starship.name}>
                      <ResourceName>{starship.name}</ResourceName>
                      <ResourceMeta>Model: {normalizeValue(starship.model)}</ResourceMeta>
                      <ResourceMeta>Class: {normalizeValue(starship.starshipClass)}</ResourceMeta>
                      <ResourceMeta>Manufacturer: {normalizeValue(starship.manufacturer)}</ResourceMeta>
                    </ResourceCard>
                  ))
                )}
              </SectionBody>
            )}
          </Section>
        </Grid>
      </About>
    </Container>
  );
}

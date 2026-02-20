# innova-starwars-next

Migracao do projeto para Next.js mantendo o layout original.

## Stack
- Node.js LTS (22+)
- Next.js 15 (LTS/estavel)
- React 18
- styled-components

## APIs publicas
- SWAPI: `https://swapi.dev/`
- Imagens dos personagens: `https://akabab.github.io/starwars-api/api/all.json`

A interface consome apenas rotas internas do Next:
- `GET /api/persons?page=1`
- `GET /api/persons/{name}?page=1`
- `GET /api/movies?url=<film_url>&url=<film_url>`

## Como rodar
```bash
npm install
npm run dev
```

## Build de producao
```bash
npm run build
npm run start
```

# innova-starwars-next

Migration of the project to Next.js while maintaining the original layout.

## Stack

- Node.js LTS (22+)
- Next.js 15 (LTS/stable)
- React 18
- styled-components

## Public APIs

- SWAPI: `https://swapi.dev/`
- Character images: `https://akabab.github.io/starwars-api/api/all.json`

The interface only consumes internal Next.js routes:

- `GET /api/persons?page=1`
- `GET /api/persons/{name}?page=1`
- `GET /api/movies?url=<film_url>`

## How to run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

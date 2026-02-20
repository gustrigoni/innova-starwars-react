import type { NextApiRequest, NextApiResponse } from "next";
import type { Movie } from "../../lib/contracts";
import { listMoviesByUrls } from "../../lib/swapi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie[] | { message: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const urlsQuery = req.query.url;
    const urls = Array.isArray(urlsQuery) ? urlsQuery : urlsQuery ? [urlsQuery] : [];
    const data = await listMoviesByUrls(urls);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Failed to load Star Wars films." });
  }
}


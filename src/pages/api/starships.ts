import type { NextApiRequest, NextApiResponse } from "next";

import { ensureGetMethod } from "../../lib/apiRoute";
import type { ApiErrorResponse, Starship } from "../../lib/contracts";
import { listStarshipsByUrls } from "../../lib/swapi";

function parseUrls(queryValue: string | string[] | undefined): string[] {
  if (Array.isArray(queryValue)) {
    return queryValue;
  }

  return queryValue ? [queryValue] : [];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Starship[] | ApiErrorResponse>) {
  if (!ensureGetMethod(req, res)) {
    return;
  }

  try {
    const urls = parseUrls(req.query.url);
    const data = await listStarshipsByUrls(urls);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to load Star Wars starships." });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";

import { ensureGetMethod, parsePageParam } from "../../../lib/apiRoute";
import type { ApiErrorResponse, PersonsApiResponse } from "../../../lib/contracts";
import { searchPersonsByName } from "../../../lib/swapi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PersonsApiResponse | ApiErrorResponse>
) {
  if (!ensureGetMethod(req, res)) {
    return;
  }

  try {
    const page = parsePageParam(req.query.page);
    const name = String(req.query.name ?? "");
    const data = await searchPersonsByName(name, page);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to search Star Wars people." });
  }
}

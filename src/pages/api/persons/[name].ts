import type { NextApiRequest, NextApiResponse } from "next";
import type { PersonsApiResponse } from "../../../lib/contracts";
import { searchPersonsByName } from "../../../lib/swapi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PersonsApiResponse | { message: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const page = Number(req.query.page ?? 1);
    const name = String(req.query.name ?? "");
    const data = await searchPersonsByName(name, page);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Failed to search Star Wars people." });
  }
}


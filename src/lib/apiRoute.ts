import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiErrorResponse } from "./contracts";

export function ensureGetMethod(
  req: NextApiRequest,
  res: NextApiResponse<ApiErrorResponse>
): boolean {
  if (req.method === "GET") {
    return true;
  }

  res.setHeader("Allow", "GET");
  res.status(405).json({ message: "Method not allowed." });
  return false;
}

export function parsePageParam(value: string | string[] | undefined): number {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const parsed = Number(rawValue ?? 1);

  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

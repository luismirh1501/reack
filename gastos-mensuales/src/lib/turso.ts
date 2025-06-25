// src/lib/turso.ts
import { createClient } from "@turso/client";

const TURSO_URL   = import.meta.env.VITE_TURSO_URL!;
const TURSO_TOKEN = import.meta.env.VITE_TURSO_TOKEN!;

const client = createClient({
  url: TURSO_URL,
  authToken: TURSO_TOKEN,
});

export const db = client.db();

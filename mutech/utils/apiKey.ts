// =====================================
// utils/apiKey.ts
// generate + hash API key (client-side mock)
// =====================================
import { v4 as uuidv4 } from "uuid";

export function generateRawApiKey(): string {
return `sk-${uuidv4().replace(/-/g, "")}`;
}

export async function hashApiKey(rawKey: string): Promise<string> {
const encoder = new TextEncoder();
const data = encoder.encode(rawKey);
const hashBuffer = await crypto.subtle.digest("SHA-256", data);
const hashArray = Array.from(new Uint8Array(hashBuffer));
return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
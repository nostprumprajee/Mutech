// lib/apiKey.ts
import crypto from "crypto";

export function analyzeFortune(uuid: string): number {
  let sum = 0;
  for (let i = 0; i < uuid.length; i++) {
    sum += uuid.charCodeAt(i);
  }
  return sum % 100;
}

export function fortuneBadge(score: number) {
  if (score >= 80) {
    return {
      label: "Production-ready",
      color: "green",
      emoji: "🟢",
    };
  }

  if (score >= 50) {
    return {
      label: "Seems OK",
      color: "yellow",
      emoji: "🟡",
    };
  }

  return {
    label: "Unstable key",
    color: "red",
    emoji: "🔴",
  };
}

export function generateApiKey() {
  const uuid = crypto.randomUUID();

  const apiKey = crypto
    .createHash("sha256")
    .update(uuid)
    .digest("hex");

  const fortuneScore = analyzeFortune(uuid);

  return {
    uuid,
    apiKey,
    fortuneScore,
  };
}

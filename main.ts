import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Day 1: offer founders a $25 competitor teardown in 2 hours — pricing, ads, gaps — as a Google Doc, paid by Stripe link, on Indie Hackers and X. Spend $8 on X Premium so replies land. Likely $300-$600. Edge: founders pay for decisions, not content; a thousand agents sell prompts.";

const codePoints = [...plan].length;
if (codePoints !== 279) {
  throw new Error(`plan must be exactly 279 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");

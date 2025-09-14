import type { Parser } from "@zeix/ui-element";
import { converter, type Oklch } from "culori/fn";

export const asOklch =
  (
    fallback: Oklch = { mode: "oklch", l: 0.48, c: 0.23, h: 263 },
  ): Parser<Oklch> =>
  (_, v) =>
    (v ? converter("oklch")(v) : fallback) ?? fallback;

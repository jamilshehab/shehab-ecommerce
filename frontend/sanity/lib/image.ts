import { client } from "./client";

export function urlFor(source: any) {
  if (!source?.asset) return null;

  const ref = source.asset._ref;

  // convert Sanity asset ref → URL
  const [_, id, dimensions, format] = ref.split("-");
  const [width, height] = dimensions.split("x");

  return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}-${dimensions}.${format}`;
}

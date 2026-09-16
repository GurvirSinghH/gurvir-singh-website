/**
 * Allowed values for a research note's `category` frontmatter field.
 * A note with any other category stops the build with an error.
 */
export const NOTE_CATEGORIES = [
  "PIML",
  "Machine Learning",
  "Scientific Computing",
  "Papers",
  "Projects",
] as const;

export type NoteCategory = (typeof NOTE_CATEGORIES)[number];

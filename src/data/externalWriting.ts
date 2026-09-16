/**
 * Articles published on other websites. They are listed on the Blog page
 * and link out to the original — their content is not copied here.
 *
 * To add one, append an object like:
 *
 *   {
 *     title: "Article title",
 *     platform: "Medium",
 *     date: "2026-09-14",          // shown as "September 2026"
 *     description: "One or two sentences about the article.",
 *     url: "https://…",            // the article's real URL
 *   },
 */

export interface ExternalArticle {
  title: string;
  platform: string;
  /** "YYYY-MM-DD", or "[TODO]" while unknown. */
  date: string;
  description: string;
  /** The article's real URL, or null while this is still a placeholder. */
  url: string | null;
}

export const externalWriting: ExternalArticle[] = [];

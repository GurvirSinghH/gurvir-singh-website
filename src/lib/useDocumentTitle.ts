import { useEffect } from "react";

const DEFAULT_TITLE = "Gurvir Singh — AI & Data Science";

/** Sets the browser tab title, e.g. "Projects — Gurvir Singh". Omit the title on the home page. */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Gurvir Singh` : DEFAULT_TITLE;
  }, [title]);
}

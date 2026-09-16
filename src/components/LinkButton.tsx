import type { ReactNode } from "react";
import { Link } from "react-router";

interface LinkButtonProps {
  /**
   * Internal route ("/projects"), external URL ("https://…") or file path.
   * If null/undefined, a clearly marked, non-clickable placeholder is shown.
   */
  href?: string | null;
  children: ReactNode;
  /** Extra text for screen readers, e.g. the project name, so "GitHub" links are distinguishable. */
  context?: string;
  /** Set for file downloads such as the CV PDF. */
  download?: boolean;
}

const base =
  "inline-flex items-center gap-1 rounded-sm border px-2.5 py-1 text-sm leading-6 whitespace-nowrap";

export default function LinkButton({ href, children, context, download }: LinkButtonProps) {
  const srContext = context ? <span className="sr-only"> — {context}</span> : null;

  if (!href) {
    return (
      <span className={`${base} border-dashed border-faint/60 text-faint`}>
        {children}
        {srContext}
        <span className="font-mono text-xs text-todo-ink">[PLACEHOLDER]</span>
      </span>
    );
  }

  const style = `${base} border-rule text-accent hover:border-accent hover:text-accent-dark`;
  const isInternal = href.startsWith("/") && !download;

  if (isInternal) {
    return (
      <Link to={href} className={style}>
        {children}
        {srContext}
      </Link>
    );
  }

  const isExternal = /^https?:\/\//.test(href);
  return (
    <a href={href} className={style} download={download || undefined}>
      {children}
      {srContext}
      {isExternal && (
        <span aria-hidden="true" className="text-xs">
          ↗
        </span>
      )}
    </a>
  );
}

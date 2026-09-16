import type { ReactNode } from "react";
import { isPlaceholder } from "../data/site";

/** Highlighted marker for content that still needs to be filled in. */
export default function Placeholder({ children = "[TODO]" }: { children?: ReactNode }) {
  return (
    <span className="rounded-sm bg-todo-bg px-1 py-0.5 font-mono text-[0.85em] text-todo-ink">
      {children}
    </span>
  );
}

/** Renders a value as plain text, or as a Placeholder if it is still "[TODO]"/"[PLACEHOLDER]". */
export function Value({ value }: { value: string | null | undefined }) {
  return isPlaceholder(value) ? <Placeholder>{value ?? "[TODO]"}</Placeholder> : <>{value}</>;
}

import { Link, useParams } from "react-router";
import { formatDate } from "../lib/formatDate";
import { getNote } from "../lib/notes";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import NotFound from "./NotFound";

export default function NotePage() {
  const { slug = "" } = useParams();
  const note = getNote(slug);
  useDocumentTitle(note ? note.title : "Page not found");

  if (!note) return <NotFound />;

  return (
    <article>
      <header className="max-w-2xl">
        <h1 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {note.title}
        </h1>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          <dt className="text-faint">Date</dt>
          <dd className="text-muted">
            <time dateTime={note.date}>{formatDate(note.date)}</time>
          </dd>
          <dt className="text-faint">Category</dt>
          <dd className="text-muted">{note.category}</dd>
        </dl>
      </header>

      {/* HTML generated at build time from the note's Markdown file. */}
      <div
        className="article mt-10 max-w-2xl border-t border-rule pt-8"
        dangerouslySetInnerHTML={{ __html: note.html }}
      />

      <footer className="mt-14 max-w-2xl border-t border-rule pt-6">
        <Link to="/notes" className="link">
          ← Back to Research Notes
        </Link>
      </footer>
    </article>
  );
}

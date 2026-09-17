import { Link } from "react-router";
import PageHeader from "../components/PageHeader";
import { formatDate } from "../lib/formatDate";
import { notes } from "../lib/notes";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function Notes() {
  useDocumentTitle("Research Notes");

  return (
    <>
      <PageHeader title="Research Notes">
        <p>Notes, experiments, and questions from things I'm learning.</p>
      </PageHeader>

      {notes.length > 0 ? (
        <ol className="divide-y divide-rule border-t border-rule">
          {notes.map((note) => (
            <li key={note.slug} className="py-5">
              <h2 className="font-serif text-lg font-semibold leading-snug text-ink">
                <Link to={`/notes/${note.slug}`} className="hover:text-accent hover:underline">
                  {note.title}
                </Link>
              </h2>
              <p className="mt-0.5 text-sm text-faint">
                <time dateTime={note.date}>{formatDate(note.date)}</time>
                {" · "}
                {note.category}
              </p>
              {note.description && <p className="mt-1.5">{note.description}</p>}
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-muted">No notes yet.</p>
      )}
    </>
  );
}

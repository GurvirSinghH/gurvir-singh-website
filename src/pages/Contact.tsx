import PageHeader from "../components/PageHeader";
import { Value } from "../components/Placeholder";
import { isPlaceholder, site } from "../data/site";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("Contact");

  return (
    <>
      <PageHeader title="Contact" />

      <dl className="grid grid-cols-[5rem_1fr] gap-y-3">
        <dt className="text-faint">Email</dt>
        <dd>
          {isPlaceholder(site.email) ? (
            <Value value={site.email} />
          ) : (
            <a href={`mailto:${site.email}`} className="link">
              {site.email}
            </a>
          )}
        </dd>

        <dt className="text-faint">GitHub</dt>
        <dd className="break-all">
          <a href={site.github} className="link">
            {site.github.replace(/^https:\/\//, "")}
          </a>
        </dd>
      </dl>
    </>
  );
}

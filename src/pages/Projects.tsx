import PageHeader from "../components/PageHeader";
import { ProjectList } from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects, type ProjectSection } from "../data/projects";
import { site } from "../data/site";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const sections: { id: ProjectSection; title: string; intro?: string }[] = [
  { id: "selected", title: "Selected Work" },
  { id: "other", title: "Other Projects" },
  {
    id: "exploration",
    title: "Exploration",
    intro: "Ideas I am exploring as part of what I am learning, rather than built projects.",
  },
];

export default function Projects() {
  useDocumentTitle("Projects");

  return (
    <>
      <PageHeader title="Projects">
        <p>
          Projects I have built or am working on, and ideas I am exploring. Links to source code
          and details pages are included where they exist.
        </p>
      </PageHeader>

      {sections.map((section, i) => {
        const items = projects.filter((p) => p.section === section.id);
        if (items.length === 0) return null;

        return (
          <section
            key={section.id}
            aria-labelledby={section.id}
            className={i > 0 ? "mt-16" : undefined}
          >
            <SectionHeading id={section.id}>{section.title}</SectionHeading>
            {section.intro && <p className="mb-6 text-muted">{section.intro}</p>}
            <ProjectList projects={items} />
          </section>
        );
      })}

      <p className="mt-16 text-muted">
        More repositories are available on{" "}
        <a href={site.github} className="link">
          GitHub
        </a>
        .
      </p>
    </>
  );
}

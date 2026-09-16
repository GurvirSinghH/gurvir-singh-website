import { Link } from "react-router";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { getProject } from "../data/projects";
import { site } from "../data/site";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const learning = [
  {
    topic: "Machine Learning",
    note: "Strengthening my understanding of the fundamentals, so that I can apply machine learning to problems in different fields.",
  },
  {
    topic: "Physics-Informed Machine Learning",
    note: "Learning how machine learning can be combined with physical knowledge and mathematical models.",
  },
  {
    topic: "Data, systems and beyond",
    note: "Working with data and systems through projects, and exploring technical problems outside these areas too.",
  },
];

export default function Home() {
  useDocumentTitle();

  const aiLog = getProject("ai-log-intelligence-platform")!;
  const ghostBattery = getProject("ghost-battery")!;

  return (
    <>
      <section aria-labelledby="intro">
        <h1 id="intro" className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
          {site.name}
        </h1>
        <p className="mt-2 text-muted">
          Computer Science &amp; AI student exploring machine learning, data, and intelligent
          systems.
        </p>

        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed">
          <p>
            I enjoy learning how things work, building with what I learn, and solving problems
            along the way. My interests currently lie in AI/ML, data science, and
            physics-informed machine learning, with a broader curiosity about technology and its
            applications across different fields.
          </p>
          <p>
            I learn with the goal of understanding things well enough to build with them, explain
            them to others, and help solve problems.
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link to="/projects" className="link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog" className="link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/cv" className="link">
              CV
            </Link>
          </li>
          <li>
            <a href={site.github} className="link">
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="currently-learning" className="mt-16">
        <SectionHeading
          id="currently-learning"
          aside={
            <Link to="/notes" className="link">
              Research Notes
            </Link>
          }
        >
          Currently learning
        </SectionHeading>
        <dl className="max-w-2xl space-y-4">
          {learning.map((item) => (
            <div key={item.topic}>
              <dt className="font-semibold text-ink">{item.topic}</dt>
              <dd className="mt-0.5 text-muted">{item.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="current-work" className="mt-16">
        <SectionHeading
          id="current-work"
          aside={
            <Link to="/projects" className="link">
              All projects
            </Link>
          }
        >
          Current work
        </SectionHeading>

        <div className="divide-y divide-rule">
          <ProjectCard project={aiLog} />

          {/* Not a repository-backed project, so it is not in src/data/projects.ts.
              TODO: add the hackathon's name and a link to the project if you want them shown. */}
          <article className="py-7 first:pt-0 last:pb-0">
            <h3 className="font-serif text-lg font-semibold leading-snug text-ink">
              Data Visualization Hackathon
            </h3>
            <p className="mt-2">
              A project made for a data visualization hackathon I recently took part in, which
              received 3rd Prize.
            </p>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 text-sm">
              <dt className="text-faint">Status</dt>
              <dd className="text-muted">Hackathon project</dd>
            </dl>
          </article>

          <ProjectCard project={ghostBattery} />
        </div>
      </section>
    </>
  );
}

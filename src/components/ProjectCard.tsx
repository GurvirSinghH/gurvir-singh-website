import { Link } from "react-router";
import type { Project } from "../data/projects";
import LinkButton from "./LinkButton";
import { Value } from "./Placeholder";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, subtitle, description, technologies, github, demo, video, details, status } =
    project;

  return (
    <article className="py-7 first:pt-0 last:pb-0">
      <h3 className="font-serif text-lg font-semibold leading-snug text-ink">
        {details ? (
          <Link to={details} className="hover:text-accent hover:underline">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      {subtitle && <p className="mt-0.5 text-muted italic">{subtitle}</p>}

      <p className="mt-2">{description}</p>

      <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
        {technologies.length > 0 && (
          <>
            <dt className="text-faint">Technology</dt>
            <dd className="text-muted">{technologies.join(" · ")}</dd>
          </>
        )}
        <dt className="text-faint">Status</dt>
        <dd className="text-muted">
          <Value value={status} />
        </dd>
      </dl>

      <ul aria-label={`${title} links`} className="mt-4 flex flex-wrap gap-2">
        {github !== undefined && (
          <li>
            <LinkButton href={github} context={`${title} repository`}>
              GitHub
            </LinkButton>
          </li>
        )}
        {demo && (
          <li>
            <LinkButton href={demo} context={title}>
              Live Demo
            </LinkButton>
          </li>
        )}
        {video && (
          <li>
            <LinkButton href={video} context={title}>
              Demo Video
            </LinkButton>
          </li>
        )}
        {details && (
          <li>
            <LinkButton href={details} context={title}>
              Details
            </LinkButton>
          </li>
        )}
      </ul>
    </article>
  );
}

/** A vertical list of project cards separated by thin rules. */
export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="divide-y divide-rule">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

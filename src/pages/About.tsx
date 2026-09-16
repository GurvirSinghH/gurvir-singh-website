import { Link } from "react-router";
import PageHeader from "../components/PageHeader";
import { Value } from "../components/Placeholder";
import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";
import { useDocumentTitle } from "../lib/useDocumentTitle";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5 marker:text-faint">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function About() {
  useDocumentTitle("About");
  const { education } = site;

  const educationRows: [string, string][] = [
    ["Degree", education.degree],
    ["Specialization", education.specialization],
    ["Institution", education.institution],
    ["Year", education.year],
    ["CGPA", education.cgpa],
    ["Expected graduation", education.expectedGraduation],
  ];

  return (
    <>
      <PageHeader title={site.name}>
        <p>{site.shortDegree}</p>
      </PageHeader>

      <div className="max-w-2xl space-y-4">
        <p>
          I am a third-year Computer Science student specializing in Artificial Intelligence and
          Data Science. I spend a lot of my time learning how things work, building with what I
          learn, and trying to solve problems along the way.
        </p>
        <p>
          I am currently exploring machine learning, data science, and physics-informed machine
          learning. What interests me most about machine learning is not being tied to one
          application or field, but understanding it well enough to use it when a problem calls
          for it. More generally, I get curious about technical problems even when they fall
          outside my specialization.
        </p>
        <p>
          I learn with the goal of understanding things well enough to build with them, explain
          and teach them to other people, and help solve problems.
        </p>
        <p>
          One idea I am exploring as I learn more about physics-informed machine learning is{" "}
          <Link to="/projects/ghost-battery" className="link">
            Ghost Battery
          </Link>
          , an attempt to think about how observable telemetry and physical knowledge might be
          used to reason about hidden energy states. It is still only an idea and has not been
          built or validated.
        </p>
      </div>

      <section aria-labelledby="education" className="mt-14">
        <SectionHeading id="education">Education</SectionHeading>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-[11rem_1fr] sm:gap-y-2">
          {educationRows.map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="mt-2 text-sm text-faint sm:mt-0 sm:text-base">{label}</dt>
              <dd>
                <Value value={value} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-14 grid gap-14 sm:grid-cols-2 sm:gap-8">
        <section aria-labelledby="coursework">
          <SectionHeading id="coursework">Current coursework</SectionHeading>
          <BulletList items={site.coursework} />
        </section>

        <section aria-labelledby="interests">
          <SectionHeading id="interests">Interests</SectionHeading>
          <h3 className="text-sm text-faint">Current focus</h3>
          <div className="mt-2">
            <BulletList items={site.interests.current} />
          </div>
          <h3 className="mt-5 text-sm text-faint">Also interested in</h3>
          <div className="mt-2">
            <BulletList items={site.interests.broader} />
          </div>
        </section>
      </div>

      <section aria-labelledby="skills" className="mt-14">
        <SectionHeading id="skills">Programming &amp; tools</SectionHeading>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-[11rem_1fr] sm:gap-y-2">
          <dt className="text-sm text-faint sm:text-base">Languages</dt>
          <dd>{site.languages.join(" · ")}</dd>
          <dt className="mt-2 text-sm text-faint sm:mt-0 sm:text-base">ML &amp; data</dt>
          <dd>{site.mlTools.join(" · ")}</dd>
        </dl>
      </section>
    </>
  );
}

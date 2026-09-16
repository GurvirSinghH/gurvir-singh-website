import type { ComponentType } from "react";
import { useParams } from "react-router";
import NotFound from "../NotFound";
import GhostBattery from "./GhostBattery";

/**
 * Project details pages, keyed by project slug (see src/data/projects.ts).
 * To add a details page: create a component in this folder, register it here,
 * and set `details: "/projects/<slug>"` on the project.
 */
const projectPages: Record<string, ComponentType> = {
  "ghost-battery": GhostBattery,
};

export default function ProjectDetails() {
  const { slug = "" } = useParams();
  const Page = projectPages[slug];
  return Page ? <Page /> : <NotFound />;
}

import Image from "next/image";
import project from "@/data/projects.json";
import { Project, ProjectsData } from "@/types/project";
import { Card } from "./Card";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const data = project as ProjectsData;

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {/* Mobile sticky header */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur lg:hidden">
        <h2 className="py-4 text-sm font-bold uppercase tracking-widest">
          {data.title}
        </h2>
      </div>

      {/* Desktop title */}
      {/* <h2 className="hidden lg:block mb-8 text-sm font-bold uppercase tracking-widest">
        {data.title}
      </h2> */}

      <ul className="space-y-12">
        {data.projects.map((project: Project, index: number) => (
          <li key={index} className="group">
            <Card>
              {/* Image */}
              <div className="sm:col-span-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded border border-accent/20 object-cover"
                />
              </div>

              {/* Content */}
              <div className="sm:col-span-6">
                <h3 className="text-base font-semibold">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    {project.title}
                    <FaExternalLinkAlt className="inline-block h-3 w-3 ml-1 relative -top-px" />
                  </Link>
                </h3>

                <p className="mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                {/* <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, i: number) => (
                    <li
                      key={i}
                      className="rounded-full bg-[#fef6f6] px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </li>
                  ))}
                </ul> */}
              </div>
            </Card>
          </li>
        ))}
      </ul>

      {/* Archive link */}
      <div className="mt-12">
        <Link
          href="/archive"
          className="inline-flex items-center font-semibold hover:underline"
        >
          View Full Project Archive <FaArrowRight className="ml-1 w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}

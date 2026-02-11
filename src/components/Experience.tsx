import { ExperienceData, ExperienceItem } from "@/types/experience";
import experience from "@/data/experience.json";
import { Card } from "./Card";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const data = experience as ExperienceData;
export default function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-6 backdrop-blur lg:hidden">
        <h2 className="py-4 text-sm font-bold uppercase tracking-widest">
          {data.title}
        </h2>
      </div>

      {/* <h2 className="hidden lg:block text-sm font-bold uppercase tracking-widest mb-8">
        {data.title}
      </h2> */}

      <ol className="space-y-12">
        {data.items.map((item: ExperienceItem, index: number) => (
          <li key={index} className="group">
            <Card>
              <header className="sm:col-span-2 text-xs font-semibold uppercase tracking-wide">
                {item.period}
              </header>

              <div className="sm:col-span-6">
                <h3 className="font-medium">
                  <Link
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent  group/link text-base"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    {item.role} · <span className="font-semibold">{item.company}</span>
                    <FaExternalLinkAlt className="inline-block h-3 w-3 ml-1 relative -top-px" />
                  </Link>
                </h3>

                <p className="mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech: string, i: number) => (
                    <li
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <Link
          href={data.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-semibold hover:underline"
        >
          View Full Resume <FaExternalLinkAlt className="ml-1 w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}

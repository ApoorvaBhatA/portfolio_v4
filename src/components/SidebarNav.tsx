"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Section } from "@/types/portfolio";
import Link from "next/link";

export function SidebarNav({ sections }: { sections: Section[] }) {
  const activeId = useScrollSpy(sections.map((s) => s.id));

  return (
    <nav className="hidden lg:block mt-16">
      <ul className="w-max space-y-3">
        {sections.map((section) => {
          const isActive = activeId === section.id;

          return (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="group inline-block py-1.5"
              >
                <span
                  className={`
      relative text-xs font-semibold uppercase tracking-widest transition-colors
      ${isActive ? "text-accent" : "text-primary-text/70 group-hover:text-accent/80"}
    `}
                >
                  {section.label}
                  <span
                    className={`
        absolute left-0 -bottom-1 h-px bg-accent transition-all duration-200
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
      `}
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

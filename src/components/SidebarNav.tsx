"use client";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Section } from "@/types/portfolio";

export function SidebarNav({sections}: {sections: Section[]}) {
  const activeId = useScrollSpy(sections.map((s) => s.id));

    return (
        <nav className="hidden lg:block mt-16">
          <ul className="w-max">
            {sections.map((section) => {
              const isActive = activeId === section.id;

              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`group flex items-center py-3 transition-all`}
                  >
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isActive
                          ? "text-accent"
                          : "group-hover:text-accent/50"
                      }`}
                    >
                      {section.label}
                    </span>
                    <span
                      className={`ml-4 h-px w-8 transition-all ${
                        isActive
                          ? "w-16 bg-accent"
                          : "bg-[#C8C8CE] group-hover:w-16 group-hover:bg-accent/50"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>);
}
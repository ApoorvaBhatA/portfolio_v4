

import data from "@/data/portfolio.json";
import { SidebarNav } from "./SidebarNav";
import { PortfolioData1 } from "@/types/portfolio";
import { SocialLinks } from "./SocialLinks";

const portfolio = data as PortfolioData1;
// lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24
export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{portfolio.name}</h1>
        <h2 className="mt-3 text-lg sm:text-xl font-medium">
          {portfolio.role}
        </h2>
        <p className="mt-4 max-w-xs">{portfolio.tagline}</p>

        <SidebarNav sections={portfolio.sections} />
      </div>

      {/* Socials */}
      <SocialLinks socials={portfolio.socials} />
    </header>
  );
}

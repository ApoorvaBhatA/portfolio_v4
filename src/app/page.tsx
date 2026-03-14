import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="text-primary-text pt-24 lg:w-[52%] lg:py-24">
          <div className="mx-auto max-w-3xl md:px-6 space-y-32">
            <About />
            <Experience />
            <Projects />
          </div>
          <footer className="mt-32 text-sm text-slate-400">
            <p>Built with Next.js and Tailwind CSS, deployed with Vercel.</p>
          </footer>
        </main>
      </div>
    </div>

  );
}

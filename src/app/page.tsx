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
          <div className="mx-auto max-w-3xl px-6 py-24 space-y-32">
            <About />
            <Experience />
            <Projects />
          </div></main>
      </div>
    </div>

  );
}

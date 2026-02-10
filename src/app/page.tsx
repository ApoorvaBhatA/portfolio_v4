import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";


export default function Home() {
  return (

    <div className="mx-auto max-w-3xl px-6 py-24 space-y-32">
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

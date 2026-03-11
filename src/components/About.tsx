import { AboutData } from "@/types/about";
import about from "@/data/about.json";

const data = about as AboutData;

export default function About() {
  function highlightText(text: string) {
  return text.split(/(==.+?==)/g).map((part, i) =>
    part.startsWith("==") && part.endsWith("==")
      ? <span key={i} className="text-accent font-bold">{part.slice(2, -2)}</span>
      : part
  );
}

  return (
      <section
         id="about"
         className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
         aria-label="About me"
       >
         <div className="sticky top-0 z-20 mb-6 bg-background lg:sr-only">
           <h2 className="py-4 text-sm font-bold uppercase tracking-widest">
             {data.title}
           </h2>
         </div>
   
         <div className="space-y-4 leading-relaxed">
           {data.paragraphs.map((text, index) => (
             <p key={index}>
               {highlightText(text)}
             </p>
           ))}
         </div>
       </section>
  );
}

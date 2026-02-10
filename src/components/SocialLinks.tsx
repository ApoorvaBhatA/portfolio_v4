// import Image from "next/image";
import { Social } from "@/types/portfolio";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const imageMap = {
  "github": FaGithub,
  "linkedin": FaLinkedin,
  "mail": FaMailBulk
}

export function SocialLinks({ socials }: { socials: Social[] }) {
  return (
    <ul className="mt-8 flex gap-6">
      {socials.map((social) => {
        const key = social.image.toLowerCase() as keyof typeof imageMap;
        const Icon = imageMap[key];

        return (
        <li key={social.name}>
          <a
            href={social.url}
            target="_blank"
          >
            <Icon className="w-6 h-6" />
            {/* <Icon
              src={social.image}
              alt={social.name}
              width={24}
              height={24}
              className="rounded border border-accent/20 object-cover"
            /> */}
          </a>
        </li>
      )})}
    </ul>);
}
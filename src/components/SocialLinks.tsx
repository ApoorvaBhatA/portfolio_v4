// import Image from "next/image";
import { Social } from "@/types/portfolio";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const imageMap = {
  "github": FaGithub,
  "linkedin": FaLinkedin,
  "mail": MdEmail
}

export function SocialLinks({ socials }: { socials: Social[] }) {
  return (
    <ul className="mt-8 flex gap-6">
      {socials.map((social) => {
        const key = social.image.toLowerCase() as keyof typeof imageMap;
        const Icon = imageMap[key];

        return (
        <li key={social.name}>
          <Link
            href={social.url}
            target="_blank"
          >
            <Icon className="w-6 h-6" />
          </Link>
        </li>
      )})}
    </ul>);
}
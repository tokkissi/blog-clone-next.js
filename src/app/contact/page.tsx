import {
  RxGithubLogo as GitHubIcon,
  RxNotionLogo as NotionIcon,
} from "react-icons/rx";
import { FaBlogger as BlogIcon } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact me",
  description: "토끼씨에게 메일 보내기",
};

const LINKS = [
  {
    icon: <GitHubIcon />,
    url: "https://github.com/tokkissi",
  },
  {
    icon: <NotionIcon />,
    url: "https://cactus-libra-3b7.notion.site/2f4009cac273405898a326587fd31af3",
  },
  {
    icon: <BlogIcon />,
    url: "https://tokkic.tistory.com",
  },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold m-2">Contact Me</h2>
      <p>alal4674@gmail.com</p>
      <ul className="flex gap-4 m-4">
        {LINKS.map((link, index) => (
          <a
            className="text-5xl hover:text-green-500"
            key={index}
            href={link.url}
            target="_blank"
            rel="noopenner noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.png";

export default function HeroProfile() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full border-2 border-zinc-400 mx-auto"
        src={profileImage}
        alt="picture of tokkissi"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm 토끼씨"}</h2>
      <h3 className="text-xl font-semibold">Front-end Engineer</h3>
      <p>코딩하는 토끼, 토끼씨</p>
      <Link href="/contact">
        <button className="bg-emerald-200 py-1 px-4 rounded mt-4 font-semibold">
          Contact Me
        </button>
      </Link>
    </section>
  );
}

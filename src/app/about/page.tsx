import HeroProfile from "@/components/HeroProfile";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
  return (
    <>
      <HeroProfile />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center rounded-2xl max-w-xl mx-auto">
        <h2 className={TITLE_CLASS}>Who am I?</h2>
        <p className="mb-8">
          삶의 문제를 코딩해나가는 프론트엔드 개발자
          <br />
          코딩하는 토끼, 토끼씨
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, TypeScript, Node.js,
          <br />
          Redux, React Query, Styled Component,
          <br />
          Tailwind CSS, MongoDB,
          <br />
          Next.js, Git, VS Code
        </p>
      </section>
    </>
  );
}

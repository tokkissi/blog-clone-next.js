import MarkdownViewer from "@/components/MarkdownViewer";
import { PostData } from "@/service/posts";
import { AiFillCalendar } from "react-icons/ai";

export default function PostContent({ post }: { post: PostData }) {
  const { content, title, description, date } = post;
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-green-600">
        <AiFillCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="border-2 border-green-700 w-48 mt-4 mb-8" />
      <MarkdownViewer content={content} />
    </section>
  );
}

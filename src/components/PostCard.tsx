import Link from "next/link";
import { Post } from "@/service/posts";
import Image from "next/image";

export default function PostCard({
  post: { path, title, date, description, category },
}: {
  post: Post;
}) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center">
          <time className="self-end">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="truncate w-full text-center">{description}</p>
          <span className="text-sm rounded-lg bg-green-100 px-2 my-2">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}

import Link from "next/link";
import React from "react";
import Post from "../types/post";
import DateFormatter from "./date-formatter";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <div>
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a className="hover:underline">{post.title}</a>
            </Link>
            <div className="text-lg mb-4">
              <DateFormatter dateString={post.date} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreStories;

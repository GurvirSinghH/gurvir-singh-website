import { Link } from "react-router";
import type { BlogPost } from "../lib/blog";
import { formatDate } from "../lib/formatDate";

export default function PostCard({ post }: { post: BlogPost }) {
  const href = `/blog/${post.slug}`;

  return (
    <li className="py-6 first:pt-0 last:pb-0">
      <h3 className="font-serif text-lg font-semibold leading-snug text-ink">
        <Link to={href} className="hover:text-accent hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="mt-0.5 text-sm text-faint">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>

      {post.description && <p className="mt-2">{post.description}</p>}

      <p className="mt-2 text-sm">
        <Link to={href} className="link">
          Read<span className="sr-only">: {post.title}</span> <span aria-hidden="true">→</span>
        </Link>
      </p>
    </li>
  );
}

/** Posts as a chronological list separated by thin rules. */
export function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <ol className="max-w-2xl divide-y divide-rule">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </ol>
  );
}

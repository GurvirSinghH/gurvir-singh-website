import { ExternalArticleList } from "../components/ExternalArticleCard";
import PageHeader from "../components/PageHeader";
import { PostList } from "../components/PostCard";
import SectionHeading from "../components/SectionHeading";
import { externalWriting } from "../data/externalWriting";
import { isPlaceholder } from "../data/site";
import { posts } from "../lib/blog";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function Blog() {
  useDocumentTitle("Blog");

  // External articles, newest first; entries without a real date go last.
  const external = [...externalWriting].sort((a, b) => {
    const aUndated = isPlaceholder(a.date);
    if (aUndated !== isPlaceholder(b.date)) return aUndated ? 1 : -1;
    return b.date.localeCompare(a.date);
  });

  return (
    <>
      <PageHeader title="Blog">
        <p>Longer pieces on things I am learning, building, and trying to understand.</p>
      </PageHeader>

      <section aria-labelledby="posts">
        <SectionHeading id="posts">Posts</SectionHeading>
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p className="text-muted">No posts yet.</p>
        )}
      </section>

      <section aria-labelledby="external-writing" className="mt-16">
        <SectionHeading id="external-writing">External Writing</SectionHeading>
        {external.length > 0 ? (
          <ExternalArticleList articles={external} />
        ) : (
          <p className="text-muted">No external articles yet.</p>
        )}
      </section>
    </>
  );
}

import type { ExternalArticle } from "../data/externalWriting";
import { isPlaceholder } from "../data/site";
import { formatDate } from "../lib/formatDate";
import Placeholder, { Value } from "./Placeholder";

export default function ExternalArticleCard({ article }: { article: ExternalArticle }) {
  return (
    <li className="py-6 first:pt-0 last:pb-0">
      <h3 className="font-serif text-lg font-semibold leading-snug text-ink">
        <Value value={article.title} />
      </h3>
      <p className="mt-0.5 text-sm text-faint">
        <Value value={article.platform} />
        {" · "}
        {isPlaceholder(article.date) ? (
          <Value value={article.date} />
        ) : (
          <time dateTime={article.date}>{formatDate(article.date, "month")}</time>
        )}
      </p>

      <p className="mt-2">
        <Value value={article.description} />
      </p>

      <p className="mt-2 text-sm">
        {article.url ? (
          <a href={article.url} className="link">
            Read externally<span className="sr-only">: {article.title}</span>{" "}
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <>
            <span className="text-faint">Read externally</span> <Placeholder>[PLACEHOLDER]</Placeholder>
          </>
        )}
      </p>
    </li>
  );
}

/** External articles as a list separated by thin rules. */
export function ExternalArticleList({ articles }: { articles: ExternalArticle[] }) {
  return (
    <ol className="max-w-2xl divide-y divide-rule">
      {articles.map((article) => (
        <ExternalArticleCard key={article.url ?? article.title} article={article} />
      ))}
    </ol>
  );
}

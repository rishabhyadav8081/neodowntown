import { useEffect } from "react";
import { FiArrowLeft, FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";
import { articles } from "./articlesData";

function updateSeo(title, description, article) {
  document.title = title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;

  document.getElementById("article-schema")?.remove();
  if (article) {
    const schema = document.createElement("script");
    schema.id = "article-schema";
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.date,
      author: { "@type": "Organization", name: "Neo Downtown" },
      publisher: { "@type": "Organization", name: "Neo Downtown" },
    });
    document.head.appendChild(schema);
  }
}

function ArticleCard({ article }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <a href={`#article/${article.slug}`} className="block overflow-hidden">
        <img
          src={article.image}
          alt={`${article.title} - Lucknow real estate`}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60"
          loading="lazy"
        />
      </a>
      <div className="p-5 sm:p-6">
        <span className="inline-flex rounded-full bg-[#B58A45]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8f6a36]">
          {article.category}
        </span>
        <h2 className="mt-4 text-xl font-serif leading-snug text-stone-900 sm:text-2xl">
          <a href={`#article/${article.slug}`} className="transition hover:text-[#B58A45]">
            {article.title}
          </a>
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600 sm:text-base">
          {article.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
          <span className="flex items-center gap-1.5 text-xs text-stone-500">
            <FiClock /> {article.readTime}
          </span>
          <a href={`#article/${article.slug}`} className="flex items-center gap-2 text-sm font-semibold text-[#9a743b] transition group-hover:gap-3">
            Read article <FiArrowRight />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ArticlesPage() {
  useEffect(() => {
    updateSeo(
      "Lucknow Real Estate Articles & Property Guides | Neo Downtown",
      "Explore Lucknow real estate articles, commercial property investment guides, location insights and buyer tips from Neo Downtown."
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#f8f6f1] pt-16 lg:pt-20">
      <section className="relative overflow-hidden bg-stone-950 px-5 py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,138,69,.28),transparent_38%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B06A] sm:text-sm">Property insights</p>
          <h1 className="mt-5 text-4xl font-serif leading-tight sm:text-5xl lg:text-6xl">Lucknow Real Estate Articles</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
            Practical guides and local insights for people exploring office, retail and commercial property in Lucknow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-6 lg:py-20" aria-label="All articles">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
    </main>
  );
}

export function ArticleDetail({ slug }) {
  const article = articles.find((item) => item.slug === slug);

  useEffect(() => {
    if (article) updateSeo(`${article.title} | Neo Downtown`, article.excerpt, article);
    window.scrollTo(0, 0);
    return () => document.getElementById("article-schema")?.remove();
  }, [article]);

  if (!article) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-5 pt-24 text-center">
        <div>
          <h1 className="text-4xl font-serif">Article not found</h1>
          <a href="#articles" className="mt-6 inline-flex items-center gap-2 text-[#9a743b]"><FiArrowLeft /> Browse all articles</a>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white pt-16 lg:pt-20">
      <article>
        <header className="bg-[#f8f6f1] px-5 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <a href="#articles" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8f6a36] hover:text-black">
              <FiArrowLeft /> All articles
            </a>
            <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.24em] text-[#9a743b]">{article.category}</span>
            <h1 className="mt-4 text-3xl font-serif leading-tight text-stone-950 sm:text-5xl lg:text-6xl">{article.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">{article.excerpt}</p>
            <div className="mt-7 flex flex-wrap gap-5 text-sm text-stone-500">
              <span className="flex items-center gap-2"><FiCalendar /> {article.date}</span>
              <span className="flex items-center gap-2"><FiClock /> {article.readTime}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14 lg:px-6 lg:py-16">
          <img src={article.image} alt={article.title} className="max-h-[560px] w-full rounded-2xl object-cover shadow-lg sm:rounded-3xl" />
          <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
            {article.sections.map(([heading, body]) => (
              <section key={heading} className="mb-10">
                <h2 className="text-2xl font-serif text-stone-950 sm:text-3xl">{heading}</h2>
                <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">{body}</p>
              </section>
            ))}
            <aside className="mt-12 rounded-2xl border border-[#B58A45]/25 bg-[#f8f6f1] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a743b]">Explore Neo Downtown</p>
              <h2 className="mt-3 text-2xl font-serif">Looking for premium commercial space in Lucknow?</h2>
              <p className="mt-3 leading-7 text-stone-600">Discover office and retail opportunities near Gomti Nagar Extension.</p>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-lead-form"))}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#B58A45] px-6 py-3 font-semibold text-white transition hover:bg-black"
              >
                Contact Us <FiArrowRight />
              </button>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}

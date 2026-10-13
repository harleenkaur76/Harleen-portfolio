import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cover from "@/components/covers/Cover";
import RichText from "@/components/RichText";
import { mailto } from "@/content/site";
import { getCaseStudy, work, type Block } from "@/content/work";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.dek,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: study.title,
      description: study.dek,
      url: `/work/${study.slug}`,
      type: "article",
    },
  };
}

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={key} className="prose-body">
          <RichText text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul key={key} className="prose-body">
          {block.items.map((item) => (
            <li key={item} className="grid grid-cols-[1.5rem_1fr] border-t border-rule py-3.5">
              <span className="text-oxblood" aria-hidden="true">
                –
              </span>
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <figure key={key} className="max-w-[44rem]">
          <pre
            tabIndex={0}
            className="overflow-x-auto border border-rule bg-paper-deep p-5 text-ink md:p-6"
          >
            <code>{block.code}</code>
          </pre>
          {block.caption && <figcaption className="label mt-3">{block.caption}</figcaption>}
        </figure>
      );
    case "note":
      return (
        <p key={key} className="note max-w-md text-2xl">
          {block.text}
        </p>
      );
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const next = work[(work.indexOf(study) + 1) % work.length];
  const meta = [
    { label: "For", value: study.client },
    { label: "Role", value: study.role },
    { label: "Built with", value: study.stack.join(", ") },
    { label: "Status", value: study.status },
  ];

  return (
    <article>
      <header className="shell pb-14 pt-12 md:pb-20 md:pt-20">
        <p className="label">
          <Link href="/#work" className="link">
            Case files
          </Link>{" "}
          <span aria-hidden="true">/</span> No. {study.number}
        </p>
        <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.75rem,7.5vw,6.5rem)]">
          {study.title}
        </h1>
        <p className="mt-7 max-w-2xl text-xl text-ink-soft md:text-2xl md:leading-snug">
          {study.dek}
        </p>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <Cover study={study} />
          </div>
          <dl className="md:col-span-4">
            {meta.map((item) => (
              <div key={item.label} className="border-t border-rule py-4 first:border-ink">
                <dt className="label">{item.label}</dt>
                <dd className="mt-1 text-[0.9375rem]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="shell pb-20 md:pb-28">
        {study.sections.map((section) => (
          <section
            key={section.label}
            className="grid gap-5 border-t border-ink py-10 md:grid-cols-12 md:gap-8 md:py-14"
          >
            <h2 className="display text-3xl md:col-span-4 md:text-4xl">{section.label}</h2>
            <div className="space-y-6 md:col-span-8">
              {section.blocks.map((block, index) => renderBlock(block, index))}
            </div>
          </section>
        ))}
      </div>

      <footer className="tone-wine">
        <div className="shell grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <Link href={`/work/${next.slug}`} className="arrow-link group block">
            <p className="label">Next case file · No. {next.number}</p>
            <p className="display mt-3 text-4xl transition-colors group-hover:text-oxblood md:text-5xl">
              {next.title}{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </p>
          </Link>
          <div className="md:pl-8">
            <p className="label">Have a problem like this one?</p>
            <a href={mailto(`About “${study.title}”`)} className="btn btn-solid mt-4">
              Get in touch
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}

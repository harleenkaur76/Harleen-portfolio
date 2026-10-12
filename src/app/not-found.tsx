import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell py-24 md:py-36">
      <p className="label">Error 404</p>
      <h1 className="display mt-4 max-w-[14ch] text-6xl md:text-8xl">
        This page isn’t in the <em className="text-oxblood">notebook.</em>
      </h1>
      <p className="note mt-8 max-w-sm">It may have moved, or it may never have been written.</p>
      <Link href="/" className="btn btn-solid mt-10">
        Back to the first page
      </Link>
    </section>
  );
}

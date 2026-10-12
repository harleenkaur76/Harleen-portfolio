// The repeating section opener: a small label, a large serif title and an
// optional margin note on the right.
export default function SectionHeading({
  label,
  title,
  note,
}: {
  label: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
      <div className="md:col-span-7">
        <p className="label">{label}</p>
        <h2 className="display mt-3 text-5xl md:text-7xl">{title}</h2>
      </div>
      {note && <p className="note md:col-span-4 md:col-start-9 md:mb-2">{note}</p>}
    </div>
  );
}

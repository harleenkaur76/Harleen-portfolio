type Props = {
  label: string;
  title: string;
  /** Small count set beside the title, e.g. "03". */
  count?: string;
  /** One line of commentary under the title. */
  note?: string;
};

// The centred opener shared by the homepage sections.
export default function SectionHeading({ label, title, count, note }: Props) {
  return (
    <div className="text-center">
      <p className="label">{label}</p>
      <h2 className="display mt-3 text-[clamp(2.5rem,6.2vw,5.5rem)]">
        {title}
        {count && (
          <sup className="label ml-3 align-super text-oxblood" aria-hidden="true">
            ({count})
          </sup>
        )}
      </h2>
      {note && <p className="note mx-auto mt-5 max-w-md pl-0 before:hidden">{note}</p>}
    </div>
  );
}

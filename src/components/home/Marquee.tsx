import { personal } from "@/content/home";

// A slow band of her own words between the hero and the work. The second
// copy exists only to make the loop seamless and is hidden from readers.
export default function Marquee() {
  const run = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {personal.marquee.map((line) => (
        <li
          key={line}
          className="display flex items-center whitespace-nowrap text-4xl italic md:text-6xl"
        >
          <span className="px-6 md:px-10">{line}</span>
          <span className="text-oxblood not-italic" aria-hidden="true">
            ✳
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="tone-wine only-b marquee-wrap overflow-hidden py-6 md:py-8">
      <div className="marquee">
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}

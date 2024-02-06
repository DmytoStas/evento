import H1 from "@/components/h1";
import SearchForm from "@/components/searchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold text-accent italic underline">
          10,000 events
        </span>{" "}
        around you
      </p>

      <SearchForm />

      <div className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <ul className="flex gap-x-2 font-semibold">
          <li>
            <Link href="/events/austin">Austin</Link>
          </li>

          <li>
            <Link href="/events/seattle">Seattle</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

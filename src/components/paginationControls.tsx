import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const btnStyles =
  "flex items-center gap-x-2 text-white px-5 py-3 text-sm bg-white/5 rounded-md opacity-75 hover:opacity-100 transition";

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="w-full flex justify-between">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}

import { EventoEvent } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="relative flex w-full h-full flex-col bg-white/[3%] rounded-xl overflow-hidden transition hover:scale-105 active:scale-[1.02]"
    >
      <Image
        src={event.imageUrl}
        alt={event.name}
        width={500}
        height={280}
        className="h-[60%] object-fit"
      />

      <div className="flex flex-col flex-1 justify-center items-center">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="italic text-white/75">By {event.organizerName}</p>
        <p className="text-sm text-white/50 mt-4">{event.location}</p>
      </div>

      <div className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
        <p className="-mb-[5px] text-xl font-bold">
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "2-digit",
          })}
        </p>
        <p className="text-xs uppercase text-accent">
          {new Date(event.date).toLocaleDateString("en-US", {
            month: "short",
          })}
        </p>
      </div>
    </Link>
  );
}

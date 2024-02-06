import { type EventoEvent } from "@/lib/type";
import EventCard from "./eventCard";

type EventsListProps = {
  events: EventoEvent[];
};

export default function EventsList({ events }: EventsListProps) {
  return (
    <ul className="flex max-w-[1100px] px-[20px] flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <li key={event.id} className="flex-1 basis-80 h-[380px] max-w-[500px] ">
          <EventCard event={event} />
        </li>
      ))}
    </ul>
  );
}

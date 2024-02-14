import EventCard from "./eventCard";
import { getEventsByCity } from "@/lib/utils";
import PaginationControls from "./paginationControls";

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCount } = await getEventsByCity(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <>
      <ul className="flex mb-8 flex-wrap gap-10 justify-center">
        {events.map((event) => (
          <li
            key={event.id}
            className="flex-1 basis-[386px] h-[380px] max-w-[500px]"
          >
            <EventCard event={event} />
          </li>
        ))}
      </ul>

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </>
  );
}

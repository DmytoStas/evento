import EventsList from "@/components/eventsList";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/type";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  const res = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events"
  );
  const events: EventoEvent[] = await res.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all" && "All events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
}

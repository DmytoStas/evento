import "server-only";
import { revalidatePath, unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

export const getEventsByCity = unstable_cache(
  async (city: string, page = 1) => {
    const itemsPerPage = 6;

    const events = await prisma.eventoEvent.findMany({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
      orderBy: {
        date: "asc",
      },
      take: itemsPerPage,
      skip: (page - 1) * itemsPerPage,
    });

    let totalCount;

    if (city === "all") {
      totalCount = await prisma.eventoEvent.count();
    } else {
      totalCount = await prisma.eventoEvent.count({
        where: {
          city: capitalize(city),
        },
      });
    }

    return { events, totalCount };
  },
  [],
  { revalidate: 500 }
);

export const getEvent = unstable_cache(
  async (slug: string) => {
    const event = await prisma.eventoEvent.findUnique({
      where: {
        slug: slug,
      },
    });

    if (!event) {
      return notFound();
    }

    return event;
  },
  [],
  { revalidate: 500 }
);

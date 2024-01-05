import { getEventById } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import React from "react";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = await getEventById(id);
  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
            <Image src={event.imageUrl} alt={event.title} width={1000} height={1000} /> 
        </div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </section>
  );
};

export default EventDetails;

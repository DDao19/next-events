import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

const AllEventsPage = () => {
  const router = useRouter();
  // Gets the getAllEvents function. We then pass that data down as props to the EventList component
  // Which then displays all the events
  const allEvents = getAllEvents();
  // This function will be passed down as props to the EventsSearch component which
  // is to filter through the events selected
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default AllEventsPage;

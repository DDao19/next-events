import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/ErrorAlert";
import Button from "../../components/ui/Button";

const EventDetailPage = () => {
  const router = useRouter();
  const eventID = router.query.eventId;
  const event = getEventById(eventID);

  // Error handling for invalid event ID
  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <h2>No Event Found...</h2>
        </ErrorAlert>
        <div className="center">
          <span>
            <h2>&#8595;</h2>
          </span>
          <Button link="/">Featured Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics data={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const HomePage = () => {
  // get featured events array or objs and pass trough props to EventList component
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1 className="featuredEventsTitle">Featured Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;

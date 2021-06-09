import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = ({ items }) => {
  // created a ul and for the list items. I created a seperate component to
  // show each list item from the featured events data that we passed through props
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          location={item.location}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;

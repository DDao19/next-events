import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug; //returns an array with two values (year, month) that are strings

  // When rendering, 'filterData' will return 'undefined' first time.
  //This error check is just to display 'Loading..' if 'filterData' returns undefined.
  if (!filterData) {
    return <h1 className="center">Loading...</h1>;
  }

  const filteredYear = +filterData[0]; //using unary operator [+] to convert string to a number
  const filteredMonth = +filterData[1];

  // Error check if the year and month are not valid (entered invalid month + year manually in url)
  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <h2>Invalid filter for Month and Year. Please try again!</h2>
        </ErrorAlert>
        <div className="center">
          <span>
            <h2>&#8595;</h2>
          </span>
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });
  // Error handling for filteredEvents.
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <h2>No events found for that date.</h2>
        </ErrorAlert>
        <div className="center">
          <span>
            <h1>&#8595;</h1>
          </span>
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;

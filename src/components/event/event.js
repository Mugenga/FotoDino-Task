import React from "react";
import EventItem from "./EventItem";

const Events = ({
  events,
  deleteEvent,
  setAddEvent,
  setUpdatingEvent,
  location
}) => {
  return (
    <div className="cities d-flex flex-column py-5 m-5">
      <div className="d-flex flex-row justify-content-between px-5">
        <h1>Events at {location.name}</h1>
        <button
          className="btn btn-warning mx-3"
          aria-current="page"
          onClick={() => setAddEvent(true)}
        >
          <i className="fa fa-plus"></i> New Event
        </button>
      </div>

      {events.length === 0 ? (
        <p className="text-center">No Events found</p>
      ) : (
        events.map((event) => (
          <EventItem
            event={event}
            deleteEvent={deleteEvent}
            setUpdatingEvent={setUpdatingEvent}
            setAddEvent={setAddEvent}
          />
        ))
      )}
    </div>
  );
};

export default Events;

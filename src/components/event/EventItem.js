import React from "react";

const EventItem = ({ event, deleteEvent, setUpdatingEvent, setAddEvent  }) => {
  return (
    <div className="d-flex flex-column py-1 my-3 m-5">
      <div className="d-flex flex-column" style={{ width: "100%" }}>
        <h3>{event.id + ". " + event.name}</h3>
        <h5>{event.description}</h5>
        <small>Date: {event.event_date}</small>
        <div className="d-flex justify-content-between">
          <div>
            <button
              className="btn btn-outline-success ml-1"
              onClick={() => {
                setUpdatingEvent(event);
                setAddEvent(true);
              }}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="btn btn-outline-danger mx-1"
              onClick={() => deleteEvent(event.id)}
            >
              <i className="fa fa-trash"></i>
            </button>
            {/* <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => {
                fetchLocations(id);
                setCity(city);
              }}
            >
              Locations
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;

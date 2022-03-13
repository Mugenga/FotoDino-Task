import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import EventForm from "../components/event/EventForm";
import Events from "../components/event/event";
import { Link } from "react-router-dom";

import "../App.css";
import { useParams } from "react-router-dom";

const Event = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([{}]);
  const [city, setCity] = useState({});
  const [searchEvent, setSearchEvent] = useState({
    text: "",
    events: [],
    searching: false,
  });
  const [addEvent, setAddEvent] = useState(false);
  const [updatingEvent, setUpdatingEvent] = useState({});
  const [updateLocation, setUpdateLocation] = useState({});
  const [location, setLocation] = useState([]);
  const [addLocation, setAddLocation] = useState(false);

  useEffect(() => {
    const fetchLocations = async () => {
      await axios
        .get("https://testapi.photodino.de/locations/" + id + "/")
        .then((res) => {
          const data = res.data;
          setLocation(data);
          getEvents();
        });
    };

    const getEvents = async () => {
      const EventsFromServer = await fetchEvents();
      setEvents(EventsFromServer);
      setLoading(false);
    };
    fetchLocations();
  }, []);

  //City methods

  const fetchEvents = async () => {
    const res = await axios.get("https://testapi.photodino.de/events/");
    const data = await res.data;
    return data;
  };

  const createEvent = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post("https://testapi.photodino.de/events/", formData, config)
      .then((res) => {
        const data = res.data;
        location.mock_location_events.push(data.id);
        setLocation(location);
        setEvents([data, ...events]);
      });
  };

  const updateEvent = async (data, id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .put(`https://testapi.photodino.de/events/${id}/`, data, config)
      .then((res) => {
        const data = res.data;
        setEvents(
          events.map((event) =>
            event.id === id
              ? {
                  ...event,
                  description: data.description,
                  name: data.name,
                  event_date: data.event_date,
                }
              : event
          )
        );
      });
  };

  const deleteEvent = async (id) => {
    await axios.delete(`https://testapi.photodino.de/events/${id}/`);
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="App">
      <Fragment>
        <div className="row">
          <div className="col-sm-12 text-right pull-right">
            <Link
              to={`/`}
              activeClassName="current"
              style={{ marginLeft: "90%" }}
            >
              <button className="btn btn-sm btn-primary pull-right">
                <i className="fa fa-times"></i> Home
              </button>
            </Link>
          </div>
        </div>
        {addEvent && (
          <EventForm
            createEvent={createEvent}
            updatingEvent={updatingEvent}
            setUpdatingEvent={setUpdatingEvent}
            updateEvent={updateEvent}
            setAddEvent={setAddEvent}
            location={location}
          />
        )}
        <div className="justify-content-center">
          {loading ? (
            <img
              className="mx-auto"
              src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif"
              alt="loading"
            ></img>
          ) : (
            !addLocation &&
            !updateLocation.id &&
            !addEvent && (
              <Events
                events={events.filter((event) =>
                  location.mock_location_events.includes(event.id)
                )}
                deleteEvent={deleteEvent}
                setUpdatingEvent={setUpdatingEvent}
                setAddEvent={setAddEvent}
                location={location}
              />
            )
          )}
        </div>{" "}
      </Fragment>
    </div>
  );
};

export default Event;

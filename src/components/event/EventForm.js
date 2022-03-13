import React, { useState, useEffect } from "react";

const EventForm = ({
  createEvent,
  updatingEvent,
  setUpdatingEvent,
  updateEvent,
  setAddEvent,
  location
}) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [event_date, setDate] = useState("");

  useEffect(() => {
    setDescription(updatingEvent.description ? updatingEvent.description : "");
    setName(updatingEvent.name ? updatingEvent.name : "");
    setDate(updatingEvent.event_date ? updatingEvent.event_date : "");
  }, [updatingEvent]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a name");
      return;
    }
    if (!description) {
      alert("Please add a code");
      return;
    }
    if (!event_date) {
        alert("Please add a date");
        return;
      }

    if (updatingEvent.id !== undefined) {
      updateEvent({ description, name, event_date, location: location.id }, updatingEvent.id);
    } else {
      console.log("null");
      createEvent({ description, name, event_date, location: location.id });
    }

    setAddEvent(false);
    setUpdatingEvent({});
    setDescription("");
    setName("");
    setDate("");
  };

  const onClear = () => {
    setUpdatingEvent({});
  };

  return (
    <form className='city-form mx-auto my-5' onSubmit={onSubmit}>
      <div className='d-flex flex-row justify-content-between'>
        <h2>New Event</h2>
        <button
          className='btn btn-danger'
          onClick={() => {
            setAddEvent(false);
            setUpdatingEvent({});
          }}
        >
          <i className='fa fa-times'></i>
        </button>
      </div>

      <div className='mb-3 d-flex flex-column'>
        <label htmlFor='Name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-control'
          id='Name'
          placeholder='Event Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='mb-3 d-flex flex-column'>
        <label htmlFor='Name' className='form-label'>
          description
        </label>
        <input
          type='text'
          className='form-control'
          id='Name'
          placeholder='Event Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className='mb-3 d-flex flex-column'>
        <label htmlFor='Name' className='form-label'>
          Date
        </label>
        <input
          type='date'
          className='form-control'
          id='Name'
          placeholder='EventDescription'
          value={event_date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>


      {setUpdatingEvent.id ? (
        <button type='submit' className='btn btn-outline-primary'>
          Update
        </button>
      ) : (
        <button type='submit' className='btn btn-outline-primary'>
          Submit
        </button>
      )}
      <button
        type='reset'
        onClick={() => onClear()}
        className='btn btn-outline-warning mx-2'
      >
        Clear
      </button>
    </form>
  );
};

export default EventForm;

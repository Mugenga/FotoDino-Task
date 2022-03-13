import React from "react";
import LocationItem from "../location/LocationItem";

const City = ({
  city: { name, code },
  locations,
  setCity,
  setLocations,
  setUpdateLocation,
  setAddLocation,
  deleteLocation,
}) => {
  return (
    <div className="back">
      <div className="city d-flex flex-column my-5">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            setCity({});
            setLocations([]);
            setAddLocation(false);
            setUpdateLocation(false);
          }}
        >
          <i className="fa fa-times"></i>
        </button>
        <div className="cityTitle d-flex flex-column text-center">
          <h1>{name}</h1>
          <h2>{"- code: " + code}</h2>
          <h3>Places to visit</h3>
          <button
            style={{ width: "50%" }}
            className="btn btn-primary"
            onClick={() => {
              setAddLocation(true);
              setUpdateLocation({});
            }}
          >
            <i className="fa fa-plus"></i> Add a location
          </button>
        </div>
        <div className="row">
          {locations.map((location) => (
            <LocationItem
              location={location}
              setUpdateLocation={setUpdateLocation}
              deleteLocation={deleteLocation}
              setAddLocation={setAddLocation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default City;

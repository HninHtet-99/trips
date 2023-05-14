import React, { useState } from "react";
import "./index.css";
import useFetch from "../../hooks/useFetch";

export default function TripList() {
  let [url, setUrl] = useState("http://localhost:3001/trips");

  let { data: trips, loading, error } = useFetch(url);

  return (
    <div className="container">
      {error && <p>{error}</p>}
      {!error && (
        <div className="flex-container">
          <h2>Ready to go?</h2>
          {loading && <p>Loading Trips</p>}
          <div>
            <button onClick={() => setUrl("http://localhost:3001/trips")}>
              All
            </button>
            <button
              onClick={() =>
                setUrl("http://localhost:3001/trips?country=Myanmar")
              }
            >
              Myanmar
            </button>
            <button
              onClick={() =>
                setUrl("http://localhost:3001/trips?country=Thailand")
              }
            >
              Thailand
            </button>
          </div>
          <ul className="trips-list">
            {trips &&
              trips.map((trip) => (
                <li className="trip" key={trip.id}>
                  <h4>{trip.location}</h4>
                  <p>price - {trip.price} mmk</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

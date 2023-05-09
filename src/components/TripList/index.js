import React, { useCallback, useEffect, useState } from "react";
import './index.css'
export default function TripList() {
  let [trips, setTrips] = useState([]);
  let [url, setUrl] = useState("http://localhost:3001/trips");

  let fetchTrips = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      });
  }, [url]);
  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);
  console.log(trips);

  return (
    <div className="container">
      <div className="flex-container">
        <h2>Ready to go?</h2>
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
          {trips.map((trip) => (
            <li className="trip" key={trip.id}>
              <h4>{trip.location}</h4>
              <p>price - {trip.price} mmk</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

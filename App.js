import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    // Mock data for testing
    const mockData = [
      {
        id: 1,
        name: "Express Train",
        departureTime: "08:30 AM",
        price: 50,
        seatAvailability: "High",
      },
      {
        id: 2,
        name: "Local Train",
        departureTime: "09:00 AM",
        price: 30,
        seatAvailability: "Medium",
      },
      // Add more mock data entries...
    ];

    setTrains(mockData);
  }, []);

  const sortedTrains = trains.sort((a, b) => a.price - b.price);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      <input
        type="text"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      {sortedTrains
        .filter(train => !maxPrice || train.price <= parseFloat(maxPrice))
        .map(train => (
          <div key={train.id}>
            <h2>{train.name}</h2>
            <p>Departure Time: {train.departureTime}</p>
            <p>Price: {train.price}</p>
            <p>Seat Availability: {train.seatAvailability}</p>
          </div>
        ))}
    </div>
  );
};

export default TrainSchedule;

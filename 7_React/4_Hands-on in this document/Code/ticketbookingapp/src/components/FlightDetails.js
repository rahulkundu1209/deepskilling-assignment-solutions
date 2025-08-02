import React from 'react'
import './FlightDetails.css';

const FlightDetails = ({isLoggedin}) => {
  const flights = [
    {
      flight: "AI101",
      from: "Delhi",
      to: "Mumbai",
      departure: "10:00 AM",
      arrival: "12:30 PM"
    },
    {
      flight: "6E202",
      from: "Bangalore",
      to: "Chennai",
      departure: "2:00 PM",
      arrival: "3:15 PM"
    },
    {
      flight: "SG303",
      from: "Hyderabad",
      to: "Kolkata",
      departure: "6:45 AM",
      arrival: "9:30 AM"
    },
    {
      flight: "UK404",
      from: "Pune",
      to: "Goa",
      departure: "5:00 PM",
      arrival: "6:10 PM"
    },
    {
      flight: "G8123",
      from: "Jaipur",
      to: "Ahmedabad",
      departure: "8:30 AM",
      arrival: "9:45 AM"
    }
  ];

  return (
    <div>
      <ul>
        {flights.map((flight, idx) => (
          <li key={idx}>
            <strong>Flight:</strong> {flight.flight}<br />
            <strong>From:</strong> {flight.from}<br />
            <strong>To:</strong> {flight.to}<br />
            <strong>Departure:</strong> {flight.departure}<br />
            <strong>Arrival:</strong> {flight.arrival}
            <br />
            {isLoggedin? <button>Book</button> : <p>Log in to book</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FlightDetails
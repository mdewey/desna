import { useNavigate } from "react-router-dom";

import { halloween2024 } from "../../data/trips";



export default function TripDetails() {
  const navigate = useNavigate();
  const trip = halloween2024; // Get the trip details from the data

  return (
    <>
      <h1>{trip.title}</h1>
      <p>Start Date: {trip.startDate.formatted}</p>
      <p>End Date: {trip.endDate.formatted}</p>

      <button onClick={() => navigate('/')}>Go Home</button>
    </>
  )
}


import { useNavigate } from "react-router-dom";

import { halloween2024 } from "../../data/trips";

import { format } from 'date-fns';


export default function TripDetails() {
  const navigate = useNavigate();
  const trip = halloween2024; // Get the trip details from the data

  return (
    <>
      <h1>{trip.title}</h1>
      <p>{format(trip.startDate, "MMM do")} thru {format(trip.endDate, "MMM do")}</p>
      <section className="email-link">
        <h2>Email</h2>
        <a
          href={trip.gmailLink}
          target="_blank"
          rel="noopener noreferrer">
          Gmail Folder
        </a>
      </section>
      <section className="transportation">
        <h2>Transportation</h2>
        <p>{trip.transportation.type}</p>
        <p>Leaving: {trip.transportation.leavingTime.toString()}</p>
        <p>Back Home: {trip.transportation.backHomeTime.toString()}</p>
      </section>
      <section className="hotel">
        <h2>Hotel</h2>
        <p>{trip.hotel.name}</p>
        <p>
          {trip.hotel.address}
          <br />
          {/* google maps navigate link */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${trip.hotel.name}, ${trip.hotel.address}`)}`}
            target="_blank"
            rel="noopener noreferrer">
            Directions
          </a>
        </p>
        <p>Check-in: {format(trip.hotel.arrivalDate, "MMM do")}</p>
        <p>Check-out: {format(trip.hotel.departureDate, "MMM do")}</p>
      </section>

      {/* hotel */}
      {/*transportation  */}
      {/* things of interests */}

      <button onClick={() => navigate('/')}>Go Home</button>
    </>
  )
}


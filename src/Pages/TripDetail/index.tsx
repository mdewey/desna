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

      {/* things of interests */}
      <section className="things-of-interest">
        <h2>Climbing gyms</h2>
        <ul>
          {trip.climbingGyms?.map((gym, index) => (
            <li key={index} className="activity-card">
              <div>
                <h3>{gym.title}</h3>
                <p>{gym.description}</p>
              </div>
              <div className="links">
                <a href={gym.website} target="_blank" rel="noopener noreferrer">Website</a>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.address)}`} target="_blank" rel="noopener noreferrer">Directions</a>
              </div>
            </li>
          ))}
        </ul>
        <h2>Restaurants</h2>
        <ul>
          {trip.restaurants?.map((restaurant, index) => (
            <li key={index} className="activity-card">
              <div>
                <h3>{restaurant.title}</h3>
                <p>{restaurant.description}</p>
              </div>
              <div className="links">
                <a href={restaurant.website} target="_blank" rel="noopener noreferrer">Website</a>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`} target="_blank" rel="noopener noreferrer">Directions</a>
              </div>
            </li>
          ))}
        </ul>

        <h2>Cool places</h2>
        <ul>
          {trip.thingsToDo?.map((place, index) => (
            <li key={index} className="activity-card">
              <div>
                <h3>{place.title}</h3>
                <p>{place.description}</p>
              </div>
              <div className="links">
                <a href={place.website} target="_blank" rel="noopener noreferrer">Website</a>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`} target="_blank" rel="noopener noreferrer">Directions</a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <button onClick={() => navigate('/')}>Go Home</button>
    </>
  )
}


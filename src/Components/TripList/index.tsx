import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TripCard from "./TripCard"
import "./style.scss"
import { halloween2024, TripInterface } from "../../data/trips";

type TripListProps = {
  title: string
}

function index({ title = "1" }: TripListProps) {

  const trips = [halloween2024] as TripInterface[];
  return (
    <div className="trip-list">
      <h2>
        <TravelExploreIcon />{' '}{title || "Trip List 2"}
      </h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            <TripCard trip={trip} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default index
export type { TripListProps }
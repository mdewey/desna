import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TripCard from "./TripCard"
import "./style.scss"

type TripListProps = {
  title: string
}

function index({ title = "" }: TripListProps) {
  return (
    <div className="trip-list">
      <h2>
        <TravelExploreIcon />{' '}{title || "Trip List"}
      </h2>
      <ul>
        <li><TripCard /></li>
        <li><TripCard /></li>
        <li><TripCard /></li>
      </ul>
    </div>
  )
}

export default index
export type { TripListProps }
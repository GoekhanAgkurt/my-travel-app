import TravelList from "../components/travelList/travelList";

export default function HomePage({ travels, onDeleteTravel }) {
  return (
    <div>
      <h1>Travel App</h1>

      <TravelList travels={travels} onDeleteTravel={onDeleteTravel} />
    </div>
  );
}

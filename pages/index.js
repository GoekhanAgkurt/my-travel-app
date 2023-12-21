import TravelList from "../components/travelList/travelList";

export default function HomePage({ travels, onDeleteTravel, onEditTravel }) {
  return (
    <div>
      <h1>Travel App</h1>

      <TravelList
        travels={travels}
        onDeleteTravel={onDeleteTravel}
        onEditTravel={onEditTravel}
      />
    </div>
  );
}

import TravelList from "../components/travelList/travelList";
import Header from "@/components/header/header";

export default function HomePage({ travels, onDeleteTravel, onEditTravel }) {
  return (
    <div>
      <TravelList
        travels={travels}
        onDeleteTravel={onDeleteTravel}
        onEditTravel={onEditTravel}
      />
    </div>
  );
}

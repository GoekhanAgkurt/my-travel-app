import Link from "next/link";
import TravelCard from "../travelCard/travelCard";

export default function TravelList({ travels, onDeleteTravel }) {
  console.log("das sind die List travels", travels);

  return (
    <>
      <h2>Deine Travel Liste</h2>
      <ul>
        {travels.map((travel) => (
          <TravelCard
            key={travel.id}
            travel={travel}
            onDeleteTravel={onDeleteTravel}
          />
        ))}
      </ul>
      <Link href="/create"> add new Travel</Link>
    </>
  );
}

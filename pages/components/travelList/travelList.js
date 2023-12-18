import TravelCard from "../travelCard/travelCard";

export default function TravelList({ travels }) {
  console.log("das sind die List travels", travels);

  return (
    <>
      <h2>Deine Travel Liste</h2>
      <ul>
        {travels.map((travel) => (
          <TravelCard key={travel.id} travel={travel} />
        ))}
      </ul>
    </>
  );
}

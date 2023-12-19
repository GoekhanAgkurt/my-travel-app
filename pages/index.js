import TravelList from "../components/travelList/travelList";

export default function HomePage({ travels }) {
  console.log("das sind die Index travels", travels);

  return (
    <div>
      <h1>Travel App</h1>

      <TravelList travels={travels} />
    </div>
  );
}

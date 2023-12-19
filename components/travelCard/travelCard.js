export default function TravelCard({ travel }) {
  return (
    <li>
      <h2>{travel.title}</h2>
      <p>{travel.description}</p>
    </li>
  );
}

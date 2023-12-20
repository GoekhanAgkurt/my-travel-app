import Link from "next/link";

export default function TravelCard({ travel }) {
  return (
    <>
      <li>
        <Link href={`travels/${travel.id}`}>
          <h2>{travel.title}</h2>
          <p>{travel.description}</p>
        </Link>
        <button onClick={() => onDeleteTravel(travel.id)}>Delete</button>
      </li>
    </>
  );
}

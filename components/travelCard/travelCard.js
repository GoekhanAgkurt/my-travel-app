import Link from "next/link";

export default function TravelCard({ travel }) {
  return (
    <Link href={`travels/${travel.id}`}>
      <li>
        <h2>{travel.title}</h2>
        <p>{travel.description}</p>
      </li>
    </Link>
  );
}

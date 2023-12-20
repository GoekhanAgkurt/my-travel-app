import Link from "next/link";

import { useRouter } from "next/router";

export default function Detailspage({ travels, onDeleteTravel }) {
  const router = useRouter(); //  (next.js) greift auf die Informationen der aktuellen Route
  const { isReady } = router; // (next.js) wartet bis die router-initialisierung abgeschlossen ist
  const { id } = router.query; // speichert die id Nummer von z.b. /meine-seite?id=123 aus der aktuellen URL in id

  const travel = travels.find((travel) => travel.id === id);
  if (!isReady) return "please wait";
  if (!travel) return "no travel found";

  function deleteTravel() {
    onDeleteTravel(id);
    router.push("/");
  }

  return (
    <>
      <h3>Details Page</h3>
      <h3>{travel.title}</h3>
      <p>{travel.description}</p>
      <p>{travel.location}</p>
      <Link href="/">Back to list</Link>
      <button onClick={deleteTravel}>Delete</button>
    </>
  );
}

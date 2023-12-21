import Link from "next/link";

import { useRouter } from "next/router";
import { useState } from "react";

export default function Detailspage({ travels, onDeleteTravel, onEditTravel }) {
  const router = useRouter(); //  (next.js) greift auf die Informationen der aktuellen Route
  const { isReady } = router; // (next.js) wartet bis die router-initialisierung abgeschlossen ist
  const { id } = router.query; // speichert die id Nummer von z.b. /meine-seite?id=123 aus der aktuellen URL in id

  const [isEdit, setIsEdit] = useState(false);

  const travel = travels.find((travel) => travel.id === id);
  if (!isReady) return "please wait";
  if (!travel) return "no travel found";

  function deleteTravel() {
    onDeleteTravel(id);
    router.push("/");
  }

  function editTravel(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const editedTravel = {
      id: id,
      title: data.title,
      description: data.description,
      location: data.location,
    };

    onEditTravel(editedTravel);
    setIsEdit(false);
  }

  return (
    <>
      {!isEdit ? (
        <>
          <h3>Details Page</h3>
          <p>{travel.title}</p>
          <p>{travel.description}</p>
          <p>{travel.local}</p>

          <Link href="/"> Back to list</Link>
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button onClick={deleteTravel}>Delete</button>
        </>
      ) : (
        <form onSubmit={editTravel}>
          <label>Title</label>
          <input
            type="text"
            placeholder="z.B. Karibik Urlaub"
            id="title"
            name="title"
            defaultValue={travel.title}
          />

          <label>Description</label>
          <input
            type="text"
            placeholder="z.B. Schwimmen im Meer"
            id="description"
            name="description"
            defaultValue={travel.description}
          />

          <label>Location</label>
          <input
            type="text"
            placeholder="z.B. Nordsee, Deutschland"
            id="location"
            name="location"
            defaultValue={travel.location}
          />
          <button type="submit">Save changes</button>
        </form>
      )}
    </>
  );
}

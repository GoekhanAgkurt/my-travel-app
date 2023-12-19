import { useRouter } from "next/router";
import { uid } from "uid";

export default function CreateTravel({ onAddTravel }) {
  const router = useRouter();

  function createTravel(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("das ist die Data", data);

    const newTravel = {
      id: uid(),
      title: data.title,
      description: data.description,
      location: data.location,
    };

    onAddTravel(newTravel);
    router.push("/");
  }

  return (
    <form onSubmit={createTravel}>
      <label>Title</label>
      <input
        type="text"
        placeholder="z.B. Karibik Urlaub"
        id="title"
        name="title"
      />

      <label>Description</label>
      <input
        type="text"
        placeholder="z.B. Schwimmen im Meer"
        id="description"
        name="description"
      />

      <label>Location</label>
      <input
        type="text"
        placeholder="z.B. Nordsee, Deutschland"
        id="location"
        name="location"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

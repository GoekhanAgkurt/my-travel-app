import { initialTravels } from "@/lib/data";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [travels, setTravels] = useLocalStorageState("travels", {
    defaultValue: initialTravels,
  });

  function handleAddTravel(newTravel) {
    setTravels([...travels, newTravel]);
  }

  function handleDeleteTravel(id) {
    setTravels(travels.filter((travel) => travel.id !== id));
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        travels={travels}
        onAddTravel={handleAddTravel}
        onDeleteTravel={handleDeleteTravel}
      />
    </>
  );
}

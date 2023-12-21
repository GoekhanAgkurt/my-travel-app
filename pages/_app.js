import { initialTravels } from "@/lib/data";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import Header from "@/components/header/header";

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

  function handleEditTravel(editedTravel) {
    setTravels(
      travels.map((travel) =>
        travel.id === editedTravel.id ? editedTravel : travel
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Header />

      <Component
        {...pageProps}
        travels={travels}
        onAddTravel={handleAddTravel}
        onDeleteTravel={handleDeleteTravel}
        onEditTravel={handleEditTravel}
      />
    </>
  );
}

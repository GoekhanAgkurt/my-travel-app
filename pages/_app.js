import { initialTravels } from "@/lib/data";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import Header from "@/components/header";
import Navigation from "@/components/navigation";

export default function App({ Component, pageProps }) {
  const [travels, setTravels] = useLocalStorageState("prevFavorites", {
    defaultValue: initialTravels,
  });

  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  function handleAddTravel(newTravel) {
    setTravels([...travels, newTravel]);
  }

  function handleDeleteTravel(id) {
    setTravels(travels.filter((travel) => travel.id !== id));
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  }

  function handleEditTravel(editedTravel) {
    setTravels(
      travels.map((travel) =>
        travel.id === editedTravel.id ? editedTravel : travel
      )
    );
  }

  function handleToggleFavorites(travel) {
    if (favorites.find((favorite) => favorite.id === travel.id)) {
      setFavorites(favorites.filter((favorite) => favorite.id !== travel.id));
    } else {
      setFavorites([...favorites, travel]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Component
        {...pageProps}
        travels={travels}
        favorites={favorites}
        onAddTravel={handleAddTravel}
        onDeleteTravel={handleDeleteTravel}
        onEditTravel={handleEditTravel}
        onToggleFavorites={handleToggleFavorites}
      />
      <Navigation />
    </>
  );
}

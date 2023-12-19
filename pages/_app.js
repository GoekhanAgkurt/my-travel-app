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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        travels={travels}
        onAddTravel={handleAddTravel}
      />
    </>
  );
}

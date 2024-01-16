import FavTravelCard from "@/components/FavTravelCard/FavTravelcard";
import TravelCard from "@/components/travelCard/travelCard";
import styled from "styled-components";

export default function favorites({
  travel,
  favorites,
  onToggleFavorites,
  onDeleteTravel,
}) {
  return (
    <main>
      <h2>Deine Favoriten</h2>
      <StyledUl>
        {favorites.map((favorite) => (
          <TravelCard
            key={favorite.id}
            travel={favorite}
            favorites={favorites}
            onDeleteTravel={onDeleteTravel}
            onToggleFavorites={onToggleFavorites}
          />
          //   <FavTravelCard
          //     key={favorite.id}
          //     travel={travel}
          //     favorite={favorite}
          //     onToggleFavorites={onToggleFavorites}
          //   />
        ))}
      </StyledUl>
    </main>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  margin-block: 10px;
  padding: 0;
`;

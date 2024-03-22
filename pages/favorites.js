import TravelCard from "@/components/travelCard";
import styled from "styled-components";

export default function favorites({
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

import Link from "next/link";
import TravelCard from "../travelCard/travelCard";
import styled from "styled-components";

export default function TravelList({
  favorites,
  travels,
  onDeleteTravel,
  onToggleFavorites,
}) {
  return (
    <>
      <StyledUl>
        {travels.map((travel) => (
          <TravelCard
            key={travel.id}
            travel={travel}
            favorites={favorites}
            onDeleteTravel={onDeleteTravel}
            onToggleFavorites={onToggleFavorites}
          />
        ))}
        <StyledCreateLink href="/create"> add new Travel</StyledCreateLink>
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  margin-block: 10px;
  padding: 0;
`;

const StyledCreateLink = styled(Link)`
  color: white;
  font-weight: 600;
  padding: 15px;
  background-color: black;
  text-align: center;
  border-radius: 5px;
  width: 100%;
  display: block;
  text-decoration: none;
  &:hover {
    background-color: darkgray;
  }
`;

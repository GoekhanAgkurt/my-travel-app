import Link from "next/link";
import styled from "styled-components";
import Icon from "./icons";
import { useState } from "react";

export default function TravelCard({
  travel,
  onDeleteTravel,
  onToggleFavorites,
  favorites,
}) {
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((favorite) => favorite.id === travel.id) // prüfe ob in Array favorites mind. 1 element fav existiert, die mit travel id gleich ist
  );

  function deleteTravel() {
    const shouldDelete = window.confirm(
      `Bist du sicher, dass du ${travel.title} löschen möchtest?`
    );
    if (shouldDelete) {
      onDeleteTravel(travel.id);
    }
  }

  function toggleFavorites() {
    setIsFavorite(!isFavorite);
    onToggleFavorites(travel);
  }

  return (
    <StyledListItem $isFavorite={isFavorite}>
      <Link href={`travels/${travel.id}`}>
        <h3>{travel.title}</h3>
        <p>{travel.description}</p>
      </Link>
      <StyledDeleteButton onClick={deleteTravel}>
        <Icon variant="delete" size={20} />
      </StyledDeleteButton>
      <StyledFavButton onClick={() => toggleFavorites()}>
        {!isFavorite ? (
          <Icon variant="fav" color="gray" />
        ) : (
          <Icon variant="fav" color="red" />
        )}
      </StyledFavButton>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  margin-block-end: 10px;
  padding: 15px;
  position: relative;
  /* background-color: ${({ $isFavorite }) =>
    $isFavorite ? "green" : "white"}; */
  border-left: ${({ $isFavorite }) => ($isFavorite ? "8px solid green" : "")};

  min-height: 93px;
`;

const StyledDeleteButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  bottom: 15px;
  right: 10px;
  cursor: pointer;
`;

const StyledFavButton = styled.button`
  cursor: pointer;
  align-items: center;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: none;
`;

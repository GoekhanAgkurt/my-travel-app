import Link from "next/link";
import styled from "styled-components";
import Icon from "../icons/icons";
import { useRouter } from "next/router";

export default function TravelCard({ travel, onDeleteTravel }) {
  const router = useRouter(); //  (next.js) greift auf die Informationen der aktuellen Route

  function deleteTravel() {
    const shouldDelete = window.confirm(
      `Bist du sicher, dass du ${travel.title} löschen möchtest?`
    );

    if (shouldDelete) {
      onDeleteTravel(travel.id);
      router.push("/");
    }
  }

  return (
    <>
      <StyledArticle>
        <li>
          <Link href={`travels/${travel.id}`}>
            <h3>{travel.title}</h3>
            <p>{travel.description}</p>
          </Link>
          <StyledDeleteButton onClick={deleteTravel}>
            <Icon variant="delete" size={20} />
          </StyledDeleteButton>
        </li>
      </StyledArticle>
    </>
  );
}

const StyledArticle = styled.article`
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  margin-block-end: 10px;
  padding: 15px;
  position: relative;
`;

const StyledDeleteButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
`;

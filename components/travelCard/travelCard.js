import Link from "next/link";
import styled from "styled-components";
import Icon from "../icons/icons";

export default function TravelCard({ travel, onDeleteTravel }) {
  return (
    <>
      <StyledArticle>
        <li>
          <Link href={`travels/${travel.id}`}>
            <h3>{travel.title}</h3>
            <p>{travel.description}</p>
          </Link>
          <StyledDeleteButton onClick={() => onDeleteTravel(travel.id)}>
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
`;

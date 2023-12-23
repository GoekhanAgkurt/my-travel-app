import Icon from "@/components/icons/icons";
import TravelList from "../components/travelList/travelList";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function HomePage({ travels, onDeleteTravel, onEditTravel }) {
  const [searchTravel, setSearchTravel] = useState("");
  const [foundTravel, setFoundTravel] = useState();

  useEffect(() => {
    setFoundTravel(
      travels.filter((travel) =>
        travel.title.toLowerCase().includes(searchTravel.toLowerCase())
      )
    );
  }, [searchTravel, travels]);

  return (
    <main>
      <StyledFormSearchbar>
        <Icon variant="search" />
        <StyledInput
          type="text"
          placeholder="Search forrr travels"
          onChange={(event) => setSearchTravel(event.target.value)}
        ></StyledInput>
      </StyledFormSearchbar>
      <TravelList
        travels={searchTravel.length === 0 ? travels : foundTravel}
        onDeleteTravel={onDeleteTravel}
        onEditTravel={onEditTravel}
      />
    </main>
  );
}

const StyledInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  padding: 10px;
  width: 100%;
  font-size: 16px;
`;

const StyledFormSearchbar = styled.form`
  display: flex;
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  padding-inline: 5px;
  padding-block: 3px;
  margin-block: 20px;
`;

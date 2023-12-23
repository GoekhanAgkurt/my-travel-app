import { useState } from "react";
import styled from "styled-components";
import Icon from "../icons/icons";

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <StyledBurgerButton onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? <Icon variant="menu" /> : <Icon variant="cancel" />}
      </StyledBurgerButton>

      {menuOpen && (
        <StyledMenu>
          <StyledMenuUl>
            <StyledMenuLi>
              <h2>About me</h2>
            </StyledMenuLi>
            <StyledMenuLi>
              <h2> The Project</h2>
            </StyledMenuLi>
            <StyledMenuLi>
              <h2>Lorem Ipsum</h2>
            </StyledMenuLi>
            <StyledMenuLi>
              <h2>Contact</h2>
            </StyledMenuLi>
          </StyledMenuUl>
        </StyledMenu>
      )}
    </>
  );
}

const StyledMenu = styled.section`
  position: absolute;
  left: 0;
  top: 0px;
  margin: 0;
  background-color: white;
  width: 100%;
  height: 80%;
  z-index: 2;
`;

const StyledBurgerButton = styled.button`
  z-index: 3;
  background: none;
  border: none;
`;

const StyledMenuUl = styled.ul`
  list-style: none;
  margin-top: 100px;
  font-size: 25px;
`;

const StyledMenuLi = styled.li`
  color: blue;
  line-height: 2;
  /* color: var(--primaryColor); */
  &:hover {
    text-decoration: underline;
  }
`;

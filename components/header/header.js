import styled from "styled-components";
import BurgerMenu from "../burgerMenu/burgerMenu";

export default function Header() {
  return (
    <StyledHeader>
      <h2>My Travel App</h2>
      <BurgerMenu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  margin: 0;
  padding: 5px 15px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: inherit;
  justify-content: space-between;
`;

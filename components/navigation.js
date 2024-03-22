import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Icon from "./icons";

Link;

export default function Navigation() {
  const router = useRouter();
  return (
    <StyledFooter>
      <StyledUl>
        <StyledNavLink href="/" currentPage={router.pathname === "/"}>
          <Icon variant="travel" color="black" /> Travel list
        </StyledNavLink>
        <StyledNavLink
          href="/favorites"
          currentPage={router.pathname === "/favorites"}
        >
          <StyledIcon variant="fav" color="black" /> Favorite list
        </StyledNavLink>
      </StyledUl>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: white;
  width: 100%;
  height: 70px;
  display: flex;
  text-decoration: none;
  position: fixed;
  bottom: 0;
  border-top: 1px solid black;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 600;
  text-align: center;
  height: 100%;
  text-decoration: none;
  width: 100%;
  border-top: ${({ currentPage }) =>
    currentPage ? "7px solid green" : "7px solid white"};
`;

const StyledIcon = styled(Icon)`
  margin-top: 7px;
`;

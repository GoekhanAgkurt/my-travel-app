// import styled from "styled-components";
// import Icon from "../icons/icons";
// import { useEffect, useState } from "react";

// export default function SearchBar(travels) {
//   const [searchTravel, setSearchTravel] = useState("");
//   const [foundTravel, setFoundTravel] = useState();

//   useEffect(() => {
//     setFoundTravel(
//       travels.filter((travel) =>
//         travel.title.toLowerCase().includes(searchTravel.toLocaleLowerCase)
//       )
//     );
//   }, [searchTravel, travels]);

//   return (
//     <>
//       <Icon variant="search" />
//       <StyledInput
//         type="text"
//         placeholder="Search for travels"
//         onChange={(event) => setSearchTravel(event.target.value)}
//       ></StyledInput>
//     </>
//   );
// }

// const StyledInput = styled.input`
//   margin-block: 20px;
//   padding: 10px;
//   font-size: 16px;
//   width: 100%;
//   position: relative;
// `;

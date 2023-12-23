import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { uid } from "uid";

export default function CreateTravel({ onAddTravel }) {
  const router = useRouter();

  function createTravel(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("das ist die Data", data);

    const newTravel = {
      id: uid(),
      title: data.title,
      description: data.description,
      location: data.location,
    };

    onAddTravel(newTravel);
    router.push("/");
  }

  return (
    <main>
      <h2>Please, fill the fields</h2>

      <StyledForm onSubmit={createTravel}>
        <StyledLabel>Title</StyledLabel>
        <StyledInputField
          type="text"
          placeholder="z.B. Karibik Urlaub"
          id="title"
          name="title"
        />

        <StyledLabel>Description</StyledLabel>
        <StyledInputField
          type="text"
          placeholder="z.B. Schwimmen im Meer"
          id="description"
          name="description"
        />

        <StyledLabel>Location</StyledLabel>
        <StyledInputField
          type="text"
          placeholder="z.B. Nordsee, Deutschland"
          id="location"
          name="location"
        />
        <StyledButtonsBox>
          <StyledCancelLink href="/"> Cancel </StyledCancelLink>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledButtonsBox>
      </StyledForm>
    </main>
  );
}

const StyledButton = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  background-color: black;
  text-align: center;
  border-radius: 5px;
  border: none;
  width: 49.5%;
  text-decoration: none;
  &:hover {
    background-color: darkgray;
  }
`;

const StyledCancelLink = styled(Link)`
  color: black;
  font-weight: 600;

  padding: 15px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid black;

  width: 49.5%;
  text-decoration: none;
  &:hover {
    border: 1px solid blue;
    color: blue;
  }
`;

const StyledButtonsBox = styled.div`
  margin-block: 20px;
  display: flex;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledInputField = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  margin-top: 15px;
`;

// const StyledSubmitButton = styled.div`
//   padding-block: 15px;
//   background-color: black;
//   text-align: center;
//   border-radius: 5px;
//   color: white;
//   width: 100%;
//   margin-top: 20px;
//   cursor: pointer;
//   &:hover {
//     background-color: darkgray;
//   }
// `;

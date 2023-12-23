import Link from "next/link";
import styled from "styled-components";

import { useRouter } from "next/router";
import { useState } from "react";
import Icon from "@/components/icons/icons";

export default function Detailspage({ travels, onDeleteTravel, onEditTravel }) {
  const router = useRouter(); //  (next.js) greift auf die Informationen der aktuellen Route
  const { isReady } = router; // (next.js) wartet bis die router-initialisierung abgeschlossen ist
  const { id } = router.query; // speichert die id Nummer von z.b. /meine-seite?id=123 aus der aktuellen URL in id

  const [isEdit, setIsEdit] = useState(false);

  const travel = travels.find((travel) => travel.id === id);
  if (!isReady) return "please wait";
  if (!travel) return "no travel found";

  function deleteTravel() {
    onDeleteTravel(id);
    router.push("/");
  }

  function editTravel(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const editedTravel = {
      id: id,
      title: data.title,
      description: data.description,
      location: data.location,
    };

    onEditTravel(editedTravel);
    setIsEdit(false);
  }

  return (
    <main>
      {!isEdit ? (
        <>
          <Link href="/">
            <Icon variant="arrowBack" />
          </Link>
          <h2>{travel.title}</h2>
          <p>{travel.description}</p>
          <p>{travel.location}</p>

          <StyledButtonsBox>
            <StyledEditButton onClick={() => setIsEdit(true)}>
              Edit
            </StyledEditButton>
            <StyledSubmitButton onClick={deleteTravel}>
              Delete
            </StyledSubmitButton>
          </StyledButtonsBox>
        </>
      ) : (
        <>
          <h2>Please, fill the fields</h2>

          <StyledForm onSubmit={editTravel}>
            <StyledLabel>Title</StyledLabel>
            <StyledInputField
              type="text"
              placeholder="z.B. Karibik Urlaub"
              id="title"
              name="title"
              defaultValue={travel.title}
            />

            <StyledLabel>Description</StyledLabel>
            <StyledInputField
              type="text"
              placeholder="z.B. Schwimmen im Meer"
              id="description"
              name="description"
              defaultValue={travel.description}
            />

            <StyledLabel>Location</StyledLabel>
            <StyledInputField
              type="text"
              placeholder="z.B. Nordsee, Deutschland"
              id="location"
              name="location"
              defaultValue={travel.location}
            />

            <StyledButtonsBox>
              <StyledCancelLink href="/"> Cancel </StyledCancelLink>

              <StyledSubmitButton type="submit">
                Save changes
              </StyledSubmitButton>
            </StyledButtonsBox>
          </StyledForm>
        </>
      )}
    </main>
  );
}

const StyledButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledEditButton = styled.button`
  color: black;
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  background-color: white;
  text-align: center;
  border-radius: 5px;
  border: 1px solid black;
  width: 49.5%;
  text-decoration: none;
`;

const StyledSubmitButton = styled.button`
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

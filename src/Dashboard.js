import React, { useEffect, useState } from "react";

import Card from "./Card.js";

import { Grid, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let citiesArr = [];

function Dashboard() {
  const [textInput, setTextInput] = useState("");

  function removeDups(cities) {
    let unique = {};
    cities.forEach(function (i) {
      if (!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

  function handleClick(e) {
    setTextInput("");
    citiesArr.push(textInput);
  }

  function handleChange(event) {
    setTextInput(event.target.value);
  }

  return (
    <Container>
      <Header>
        <FontAwesomeIcon icon={faCloudSun} /> <span />
        <span />
        Weather App
      </Header>

      <InputContainer>
        <TextField
          onChange={handleChange}
          id="filled-basic"
          label="Enter a city"
          variant="filled"
          style={{ backgroundColor: "white", colo: "gray" }}
          size="small"
        />

        <Button onClick={handleClick} variant="contained" color="primary">
          Add City
        </Button>
      </InputContainer>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xs={6}
        spacing={3}
      >
        <Grid item>
          {removeDups(citiesArr).map((city) => (
            <Card key={city} city={city} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: space-around;
  display: grid;
`;

const InputContainer = styled.div`
  width: 500px;

  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.h2`
  font-size: 35px;
  width: 100%;
  text-align: center;
`;

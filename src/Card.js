import React, { useEffect, useState } from "react";

import { API_KEY } from "./utils/Utils.js";
import cloud from "./utils/Cloud.png";

import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fontsource/roboto";

import { Divider } from "@material-ui/core";

import styled from "styled-components";

function Card({ city }) {
  const [weatherData, setWeatherData] = useState([]);
  const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);

  useEffect(() => {
    fetchData();
    console.log(weatherData);
    setWithExpiry("weatherData", weatherData, 50000);
  }, []);

  function setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  function setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  async function fetchData() {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
        console.log(weatherData);
      });
  }

  let weatherIcon = null;
  if (typeof weatherData.main != "undefined") {
    if (weatherData.weather[0].main === "Thunderstorm") {
      weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if (weatherData.weather[0].main === "Drizzle") {
      weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (weatherData.weather[0].main === "Rain") {
      weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (weatherData.weather[0].main === "Snow") {
      weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (weatherData.weather[0].main === "Clear") {
      weatherIcon = <FontAwesomeIcon icon={faSun} />;
    } else if (weatherData.weather[0].main === "Clouds") {
      weatherIcon = <FontAwesomeIcon icon={faCloud} />;
    } else {
      weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }
  }

  return (
    <div>
      {typeof weatherData.main != "undefined" ? (
        <Container style={{ backgroundColor: randomColor }}>
          <TopContainer>
            <Image src={cloud} />
            <TopLeftContainer>
              <Heading>{weatherData.name}</Heading>
              <TinyText>
                {new Date(weatherData.dt * 1000).toLocaleTimeString("en-IN")}
              </TinyText>
            </TopLeftContainer>

            <TopRightContainer>
              <BigText>{weatherData.main.temp} &deg;C</BigText>
              <TinyText>
                Temp Min: {weatherData.main.temp_min} &deg;C
                <br />
                Temp Max: {weatherData.main.temp_max} &deg;C
              </TinyText>
            </TopRightContainer>
          </TopContainer>

          <BottomContainer>
            <BottomLeftContainer>
              <TinyText>
                Pressure: {weatherData.main.pressure}hPa <br />
                Humidity: {weatherData.main.humidity} &deg;C <br />
                Visibility: {weatherData.visibility} %
              </TinyText>
            </BottomLeftContainer>
            <Divider
              varient="middle"
              style={{ height: "80%" }}
              orientation="vertical"
            />
            <BottomMiddleContainer>
              <TinyText>
                <FontAwesomeIcon icon={faPaperPlane} /> {"\n"}
                {weatherData.wind.speed} m/s {weatherData.wind.deg} Degree
              </TinyText>
            </BottomMiddleContainer>
            <Divider
              varient="middle"
              style={{ height: "80%" }}
              orientation="vertical"
            />
            <BottomRightContainer>
              <TinyText>
                Sunrise:{" "}
                {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                  "en-IN"
                )}{" "}
                <br />
                Sunset:
                {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                  "en-IN"
                )}
              </TinyText>
            </BottomRightContainer>
          </BottomContainer>
        </Container>
      ) : (
        <Container></Container>
      )}
    </div>
  );
}

export default Card;

const Container = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto";
  margin: 30px;
  @media (max-width: 768px) {
    width: 420px;
    height: 280px;
  }
`;

const Image = styled.img`
  width: 18%;
  height: auto;
  position: absolute;
  opacity: 0.5;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #383b47;
`;

const TopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BottomLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const BottomMiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const BottomRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Heading = styled.h3`
  font-size: 28px;
`;

const TinyText = styled.h3`
  font-size: 14px;
`;
const BigText = styled.h3`
  font-size: 40px;
`;

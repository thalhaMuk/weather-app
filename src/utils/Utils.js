import data from "./cities.json";

export const API_KEY =  process.env.REACT_APP_OPEN_WEATHER_API_KEY;

let cityId = [];

for(var i = 0; i < data.List.length ; i++) {
  cityId.push(data.List[i].CityCode);  
}   

export const getApiURL = `https://api.openweathermap.org/data/2.5/group?id=${cityId}&appid=${API_KEY}&units=metric`;

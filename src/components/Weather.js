import React, {useEffect, useState} from "react";
// import axios from "axios";


const Weather = () => {
    const [temperature, setTemperature] = useState("");
    const [desc, setDesc] = useState("");
    const [city, setCity] = useState("Melbourne");
    const [country, setCountry] = useState("AU");

    useEffect(() => {
        const fetchTemperature = async () => {
            const url = 'http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=10a4cf0e684290e1cd09233af942dbcf',
            const response = await fetch(url);
            const responseData = await response.json();

            setTemperature(responseData);
        };
        fetchTemperature();
    }

    );

    
  
    // const getWeatherData = (city, country) => {
    //   axios({
    //     method: "GET",
    //     url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=10a4cf0e684290e1cd09233af942dbcf`,
    //   })
    //     .then((response) => {
    //       console.log(response.data.main.temp);
          
    //       setTemperature(response.data.main.temp - 273.15);
         
    //       setDesc(response.data.weather[0].main);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
  
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70px",
            width: "100%",
            backgroundColor: "#226ba3",
            fontSize: "30px",
            color: "#fff",
          }}
        >
          Weather APP
        </div>
        
        <br />
        <div style={{ marginLeft: "33%" }}>
          <div
            style={{
              height: "150px",
              width: "450px",
              backgroundColor: "#94e5ff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "25px",
            }}
          >
            {new Date().toLocaleString()}
            <br />
            {city} Weather
            <br />
            {/* {Math.round(temperature * 100) / 100} ??? */}
            {Math.round(temperature * 100) / 100} ??? - {desc}
          </div>
          <br />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button
            onClick={() => {
              getWeatherData(city, country);
            }}
          >
            GET
          </button>
        </div>
      </>
    );
  };
export default Weather;
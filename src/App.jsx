import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './page/Weather';

const API = 'a0e279d91e85ef70d20ada15e085403d';

function App() {
  const [weathers, setWeathers] = useState('');

  let data = {
    city: null,
    tempterature: null,
    clouds: null,
    wind: null,
    humidity: null,
  };

  const [city, setCity] = useState('London');

  function submitHandler(event) {
    event.preventDefault();
    setCity(event.target.elements.city.value);
  }

  useEffect(() => {
    city &&
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
        .then((response) => response.json())
        .then((resolve) => {
          setWeathers(resolve.list);
          data = {
            icon: resolve.weather[0].icon,
            city: resolve.name,
            temperature: resolve.main.temp,
            clouds: resolve.clouds.all,
            wind: resolve.wind.speed,
            humidity: resolve.main.humidity,
          };
        })
        .catch((reject) => console.log(reject));
  }, [city]);

  return (
    <Router>
      <div className="wrapper">
        <Info />
        <div className="main">
          <Form submitHandler={submitHandler} />
          <Weather data={data} />
        </div>
      </div>
    </Router>
  );
}

export default App;

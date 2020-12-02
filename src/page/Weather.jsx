import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  width: '50px',
  height: '50px',
  verticalAlign: 'middle',
  marginTop: '-7px',
};

function Weather({ data }) {
  return data.temperature != null ? (
    <div className="weather-box">
      <div>
        <p>Местоположение: {data.city}</p>
        <p>
          <span>
            Температура:
            <img
              style={styles}
              src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
              srcSet={`https://openweathermap.org/img/wn/${data.icon}.png 1x, https://openweathermap.org/img/wn/${data.icon}@2x.png 2x`}></img>
          </span>
          {Math.round(data.temperature)}
          <sup>°</sup>
        </p>
      </div>
      <div>
        <p>Вероятность осадков: {data.clouds} %</p>
        <p>Влажность: {data.humidity} %</p>
        <p>Скорость ветра: {data.wind} м/c</p>
      </div>
      <Link to="/week">Прогноз на неделю</Link>
    </div>
  ) : (
    <div></div>
  );
}

export default Weather;

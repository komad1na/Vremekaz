import { getDescription } from "./getDescription.js";
import { getPicture } from "./getPicture.js";
import { getDirection } from "./getDirection.js";

export const obrada = function (data) {
  console.log(data);
  // menjanje ikonice
  var ikonica = document.getElementById("ikonica");
  ikonica.src = getPicture(data.weather[0].icon);

  // menjanje naslova u ime grada
  const naslov = document.getElementsByClassName("card-header");
  naslov[0].innerHTML = `${data.name}`;

  // menjanje informacija o temperaturi
  var temperatura = data.main;
  var drugi = document.getElementById("podaci");
  drugi.innerHTML = `Temperatura: ${temperatura.temp} &#176;C<br>
  Osećaj: ${temperatura.feels_like}&#176;C<br>
  Vlažnost: ${temperatura.humidity}%<br>
  Maksimalna dnevna: ${temperatura.temp_max} &#176;C<br>
  Minimalna dnevna: ${temperatura.temp_min} &#176;C<br>
  Pritisak: ${temperatura.pressure} hPa<br><br>
  Brzina vetra: ${data.wind.speed} m/s<br>
  <div style="display: flex;justify-content: center;">
  <div>Smer vetra: &nbsp;&nbsp;</div>
  <div id="smer" style="padding-top: 2px;">&#8593; </div>&nbsp;&nbsp;${getDirection(
    data.wind.deg
  )}</div><br />`;

  // rotiranje strelice u smeru vetra
  var rot = document.getElementById("smer");
  rot.style.transform = `rotate(${data.wind.deg}deg)`;

  // podesavanje opisa ikonice
  const description = document.getElementById("opis");
  description.innerHTML = getDescription(data.weather[0].id);
};

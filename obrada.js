import { getDescription } from "./getDescription.js";
import { getPicture } from "./getPicture.js";

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
  drugi.innerHTML = `Temperatura: ${temperatura.temp} &#176;C<br>`;
  drugi.innerHTML += `Osećaj: ${temperatura.feels_like}&#176;C<br>`;
  drugi.innerHTML += `Vlažnost: ${temperatura.humidity}%<br>`;
  drugi.innerHTML += `Maksimalna dnevna: ${temperatura.temp_max} &#176;C<br>`;
  drugi.innerHTML += `Minimalna dnevna: ${temperatura.temp_min} &#176;C<br>`;
  drugi.innerHTML += `Pritisak: ${temperatura.pressure} hPa<br><br>`;
  drugi.innerHTML += `Brzina vetra: ${data.wind.speed} m/s<br>`;
  drugi.innerHTML += `<span>&#8599;</span><br>`;

  // podesavanje opisa ikonice
  const description = document.getElementById("opis");
  description.innerHTML = getDescription(data.weather[0].id);
};

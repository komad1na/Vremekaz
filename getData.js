import { obrada } from "./obrada.js";

export async function getData() {
  const grad = document.getElementById("grad").value;

  try {
    if (grad == "") {
      document.getElementById("gradLabela").setAttribute("style", "color: red");
      document
        .getElementById("grad")
        .setAttribute("style", "border: 2px solid red;border-radius: 3px;");
      setTimeout(() => {
        document
          .getElementById("gradLabela")
          .setAttribute("style", "color: black");
        document.getElementById("grad").setAttribute("style", "");
      }, 3000);
    } else {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${grad}&appid=25a5b5c60510a8bae4994bcd56629d8c&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          obrada(data);
        });
    }
  } catch (error) {
    console.log(error);
  }
}

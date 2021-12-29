import { obrada } from "./obrada.js";

// Logika za proveru unosa i logika za preuzimanje API podatka i obrada
export async function getData() {
  const grad = document.getElementById("grad").value;

  try {
    if (grad == "") {
      // Zacrveni se labela Unesite grad:
      document.getElementById("gradLabela").setAttribute("style", "color: red");

      // Zacrveni se input polje
      document
        .getElementById("grad")
        .setAttribute("style", "border: 2px solid red;border-radius: 3px;");

      // Zacrveni se dugme Pretrazi
      document
        .getElementById("pretragaBtn")
        .setAttribute(
          "style",
          "border: 1px solid red;border-radius: 5px;color:red;"
        );
      // Vracanje na prvobitan izgled
      setTimeout(() => {
        // Vracanje labele na stari izgled
        document
          .getElementById("gradLabela")
          .setAttribute("style", "color: var(--tekst)");
        // Vracanje input polja na stari stil
        document.getElementById("grad").setAttribute("style", "");
        // Vracanje dugmeta Pretrazi na stari stil
        document.getElementById("pretragaBtn").setAttribute("style", "");
      }, 3000);
    } else {
      // Dobijanje podataka sa API-ja
      await fetch(
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

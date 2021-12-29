// vraca ikonicu/sliku za vremensku prognozu u odnosu na API podatke
export const getPicture = function (icon) {
  var slika = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return slika;
};

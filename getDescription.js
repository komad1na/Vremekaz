export function getDescription(desc) {
  var description = "";
  switch (desc) {
    case 200:
      description = "Grmljavina sa laganom kišom";
      break;
    case 201:
      description = "Grmljavina sa kišom";
      break;
    case 202:
      description = "Grmljavina sa jakom kišom";
      break;
    case 210:
      description = "Lagana grmljavina";
      break;
    case 211:
      description = "Grmljavina";
      break;
    case 212:
      description = "Jaka grmljavina";
      break;
    case 221:
      description = "Grmljavina sa laganom kišom";
      break;
    case 230:
      description = "Grmljavina sa laganim rominjanjem";
      break;
    case 231:
      description = "Grmljavina sa rominjanjem";
      break;
    case 232:
      description = "Grmljavina sa jakim rominjanjem";
      break;
    case 300:
      description = "Lagano rominjanje";
      break;
    case 301:
      description = "Rominjanje";
      break;
    case 302:
      description = "Jako rominjanje";
      break;
    case 310:
      description = "Lagana rosna kiša";
      break;
    case 311:
      description = "Rosna kiša";
      break;
    case 312:
      description = "Jaka rosna kiša";
      break;
    case 313:
      description = "Pljusak rosne kiše";
      break;
    case 314:
      description = "Jak pljusak rosne kiše";
      break;
    case 321:
      description = "Pljusak rosne kiše";
      break;
    case 800:
      description = "Vedro";
      break;
    case 801:
      description = "Mestimično oblačno";
      break;
    case 802:
      description = "Delimično oblačno";
      break;
    case 803:
      description = "Polu oblačno";
      break;
    case 804:
      description = "Potpuno oblačno";
      break;
    case 701:
      description = "Sumaglica";
      break;
    case 711:
      description = "Dim";
      break;
    case 721:
      description = "Izmaglica";
      break;
    case 731:
      description = "Prašina";
      break;
    case 741:
      description = "Magla";
      break;
    case 751:
      description = "Peščovito";
      break;
    case 761:
      description = "Prašina";
      break;
    case 762:
      description = "Vulkanski pepeo";
      break;
    case 771:
      description = "Oluje";
      break;
    case 781:
      description = "Tornado";
      break;
    case 600:
      description = "Lagan sneg";
      break;
    case 601:
      description = "Sneg";
      break;
    case 602:
      description = "Jak sneg";
      break;
    case 611:
      description = "Susnežica";
      break;
    case 612:
      description = "Lagana susnežica";
      break;
    case 613:
      description = "Kišna susnežica";
      break;
    case 615:
      description = "Lagana kiša i sneg";
      break;
    case 616:
      description = "Kiša i sneg";
      break;
    case 620:
      description = "Lagani sneg";
      break;
    case 621:
      description = "Sneg";
      break;
    case 622:
      description = "Jak sneg";
      break;
    case 500:
      description = "Lagana kiša";
      break;
    case 501:
      description = "Kišovito";
      break;
    case 502:
      description = "Pljusak";
      break;
    case 503:
      description = "Vrlo jaka kiša";
      break;
    case 504:
      description = "Ekstremna kiša";
      break;
    case 511:
      description = "Ledena kiša";
      break;
    case 520:
      description = "Pljusak laganog intenziteta";
      break;
    case 521:
      description = "Pljusak";
      break;
    case 522:
      description = "Jak pljusak";
      break;
    case 531:
      description = "Jak pljusak";
      break;
    default:
      description = "--------";
      break;
  }
  return description;
}

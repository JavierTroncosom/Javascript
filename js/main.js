// Tasas de cambio predefinidas
const TasasdeConversion = {
    USD: { USD: 1, EUR: 0.85, MXN: 17.50, JPY: 110.50, GBP: 0.74, CAD: 1.26 },
    EUR: { USD: 1.18, EUR: 1, MXN: 20.65, JPY: 130.12, GBP: 0.86, CAD: 1.48 },
    MXN: { USD: 0.057, EUR: 0.048, MXN: 1, JPY: 6.30, GBP: 0.042, CAD: 0.072 },
    JPY: { USD: 0.009, EUR: 0.0077, MXN: 0.16, JPY: 1, GBP: 0.0066, CAD: 0.011 },
    GBP: { USD: 1.36, EUR: 1.16, MXN: 23.10, JPY: 151.34, GBP: 1, CAD: 1.71 },
    CAD: { USD: 0.79, EUR: 0.68, MXN: 14.00, JPY: 91.70, GBP: 0.58, CAD: 1 }
};
//USD: Dólar estanoudinense
//EUR: Euro
//JPY: Yen japonés.
//GBP: Libra esterlina.
//CAD: Dólar canadiense.
function ConversorDivisas() {
    let selectElement = document.getElementById('opciones1');
    let selectElement2= document.getElementById('opciones2');
    const mensajeError2 = document.getElementById("mensajeError2");
    if(selectElement2.value != "1"){
      mensajeError2.style.display = "none"; // Ocultar el mensaje de error
    }
    else{
      mensajeError2.style.display = "block"; 
    }
    let MonedaOriginal = document.getElementById('origen');
    let MonedaDestinoOriginal = document.getElementById('destino');
    const mensajeError = document.getElementById("mensajeError");
    if(selectElement.value != "1"){
        mensajeError.style.display = "none"; // Ocultar el mensaje de error
        // Solicitar el monto a convertir
        const cantidad = parseFloat(MonedaOriginal.value);
        console.log("La cantidad ingresada es "+cantidad)
        // Solicitar la moneda de origen
        const MonedaOrigen = selectElement.value;

        //Almacenar preferencias en el local storage
        localStorage.setItem("Moneda",MonedaOrigen);

        // Solicitar la moneda de destino
        const MonedaDestino = selectElement2.value;


        // Calcular el resultado de la conversión
        const rate = TasasdeConversion[MonedaOrigen][MonedaDestino];
        const cantidadConvertida = (cantidad * rate).toFixed(2);
        console.log("La cantidad ya convertida es " + cantidadConvertida);
        MonedaDestinoOriginal.value=cantidadConvertida;
    }
    else{
      alert("Por favor ingrese una opción valida");
      mensajeError.style.display = "block"; // Mostrar el mensaje de error
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let selectElement = document.getElementById('opciones1');

    if (selectElement) { // 👈 Verifica que el elemento existe antes de usarlo
      //Si ya habia elegido una Moneda de Origen antes la carga como predefinida
      if (localStorage.getItem("Moneda") !== null) {
      selectElement.value = localStorage.getItem("Moneda");
      }
        selectElement.addEventListener('change', function() {
            var imagenSeleccionada = this.value;
            var card = document.getElementById('card1')
            console.log(selectElement.value);
            switch (imagenSeleccionada) {
              case 'USD':
                card.style.backgroundImage = 'url("./assets/Dolar.jpg")';
                mensajeError.style.display = "none"; // Ocultar el mensaje de error
                break;
              case 'EUR':
                card.style.backgroundImage = 'url("./assets/Euro.jpg")';
                mensajeError.style.display = "none"; // Ocultar el mensaje de error
                break;
              case 'JPY':
                card.style.backgroundImage = 'url("./assets/Yen.jpg")';
                mensajeError.style.display = "none"; // Ocultar el mensaje de error
                break;
                case 'GBP':
                card.style.backgroundImage = 'url("./assets/Libra.jpeg")';
                mensajeError.style.display = "none"; // Ocultar el mensaje de error
                break;
                case 'CAD':
                card.style.backgroundImage = 'url("./assets/Canada.jpg")';
                mensajeError.style.display = "none"; // Ocultar el mensaje de error
                break;
                case 'MXN':
                card.style.backgroundImage = 'url("./assets/Peso.jpeg")';
                mensajeError.style.display = "none"; // Ocultar el mensaje de error
                break;
                case '1':
                card.style.backgroundImage = 'url("./assets/D.jpg")';
                break;
              default:
                card.style.backgroundImage = 'url("./assets/D.jpeg")';
                break;
             }
        });
    } else {
        console.error("El elemento con ID 'opciones1' no existe.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let selectElement = document.getElementById('opciones2');

    if (selectElement) { // 👈 Verifica que el elemento existe antes de usarlo
        selectElement.addEventListener('change', function() {
            var imagenSeleccionada = this.value;
            var card = document.getElementById('card')
            console.log(selectElement.value);
            switch (imagenSeleccionada) {
                case 'USD':
                  card.style.backgroundImage = 'url("./assets/Dolar.jpg")';
                  mensajeError.style.display = "none"; // Ocultar el mensaje de error
                  break;
                case 'EUR':
                  card.style.backgroundImage = 'url("./assets/Euro.jpg")';
                  mensajeError.style.display = "none"; // Ocultar el mensaje de error
                  break;
                case 'JPY':
                  card.style.backgroundImage = 'url("./assets/Yen.jpg")';
                  mensajeError.style.display = "none"; // Ocultar el mensaje de error
                  break;
                  case 'GBP':
                  card.style.backgroundImage = 'url("./assets/Libra.jpeg")';
                  mensajeError.style.display = "none"; // Ocultar el mensaje de error
                  break;
                  case 'CAD':
                  card.style.backgroundImage = 'url("./assets/Canada.jpg")';
                  mensajeError.style.display = "none"; // Ocultar el mensaje de error
                  break;
                  case 'MXN':
                  card.style.backgroundImage = 'url("./assets/Peso.jpeg")';
                  mensajeError.style.display = "none"; // Ocultar el mensaje de error
                  break;
                  case '1':
                    card.style.backgroundImage = 'url("./assets/D.jpg")';
                    mensajeError.style.display = "none"; // Ocultar el mensaje de error
                  break;
                default:
                  card.style.backgroundImage = 'url("./assets/D.jpeg")';
                  break;
             }
        });
    } else {
        console.error("El elemento con ID 'opciones1' no existe.");
    }
});

function VerificarCambio(){
  let selectElement = document.getElementById('opciones1');
  var imagenSeleccionada = selectElement.value;
  var card = document.getElementById('card1'); 
  if (localStorage.getItem("Moneda") !== null) {
    switch (imagenSeleccionada) {
      case 'USD':
        card.style.backgroundImage = 'url("./assets/Dolar.jpg")';
        break;
      case 'EUR':
        card.style.backgroundImage = 'url("./assets/Euro.jpg")';
        break;
      case 'JPY':
        card.style.backgroundImage = 'url("./assets/Yen.jpg")';
        break;
        case 'GBP':
        card.style.backgroundImage = 'url("./assets/Libra.jpeg")';
        break;
        case 'CAD':
        card.style.backgroundImage = 'url("./assets/Canada.jpg")';
        break;
        case 'MXN':
        card.style.backgroundImage = 'url("./assets/Peso.jpeg")';
        break;
      default:
        card.style.backgroundImage = 'url("./assets/D.jpg")';
        break;
   }
  }
}

setInterval(VerificarCambio, 500);
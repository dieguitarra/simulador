function saludar() {
  let usuario = prompt("Ingrese su usuario");
  alert("Hola " + usuario);
}
function calificaciones() {
  let calificacionUno = parseInt(prompt("ingrese sus calificaciones"));
  let calificacionDos = parseInt(prompt("ingrese sus calificaciones"));
  let calificacionTres = parseInt(prompt("ingrese sus calificaciones"));
  let calificacionCuatro = parseInt(prompt("ingrese sus calificaciones"));
  let calificacionCinco = parseInt(prompt("ingrese sus calificaciones"));
  let calificacionSeis = parseInt(prompt("ingrese sus calificaciones"));
  let suma =
    calificacionUno +
    calificacionDos +
    calificacionTres +
    calificacionCuatro +
    calificacionCinco +
    calificacionSeis;
  let resultadoFinal = suma / 6;
  if (resultadoFinal >= 7) {
    alert("Aprobado");
  } else if (resultadoFinal >= 4) {
    alert("Tenés que esforzarte más");
  } else {
    alert("Lamentablemente tenés que recursar");
  }
}

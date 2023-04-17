let cronometro;
let segundos = 0;
let minutos = 0;
let horas = 0;
let ejecutando = false;

function iniciarCronometro() {
    if (ejecutando === false) {
      ejecutando = true;
      cronometro = setInterval(function() {
        segundos++;
  
        if (segundos === 60) {
          segundos = 0;
          minutos++;
        }
  
        if (minutos === 60) {
          minutos = 0;
          horas++;
        }
  
        actualizarCronometro();
      }, 1000);
    }
  }
  
function pausarCronometro() {
  ejecutando = false;
  clearInterval(cronometro);
}

function resetearCronometro() {
  ejecutando = false;
  segundos = 0;
  minutos = 0;
  horas = 0;
  actualizarCronometro();
}

function actualizarCronometro() {
  let segundosStr = segundos < 10 ? "0" + segundos : segundos;
  let minutosStr = minutos < 10 ? "0" + minutos + ":" : minutos + ":";
  let horasStr = horas < 10 ? "0" + horas + ":" : horas + ":";

  document.getElementById("cronometro").textContent = horasStr + minutosStr + segundosStr;
}

document.getElementById("btn-iniciar").addEventListener("click", iniciarCronometro);
document.getElementById("btn-pausar").addEventListener("click", pausarCronometro);
document.getElementById("btn-resetear").addEventListener("click", resetearCronometro);

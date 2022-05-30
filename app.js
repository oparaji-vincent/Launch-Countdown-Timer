const launching = new Date(2022, 5, 30).getTime();

function init() {
  const timer = setInterval(calc, 1 * 1000);
  calc();

  function calc() {
    const now = Date.now();
    const diferenca = launching - now;
    if (diferenca <= 0) {
      clearInterval(timer);
      return;
    }
    const dias = diferenca / (1000 * 60 * 60 * 24);
    const horas = (dias - Math.trunc(dias)) * 24;
    const minutos = (horas - Math.trunc(horas)) * 60;
    const segundos = (minutos - Math.trunc(minutos)) * 60;

    document.querySelector(".days").textContent = String(
      Math.trunc(dias)
    ).padStart(2, "0");
    document.querySelector(".hours").textContent = String(
      Math.trunc(horas)
    ).padStart(2, "0");
    document.querySelector(".minutes").textContent = String(
      Math.trunc(minutos)
    ).padStart(2, "0");
    document.querySelector(".seconds").textContent = String(
      Math.trunc(segundos)
    ).padStart(2, "0");
  }
}

init();
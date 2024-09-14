// Seleccionar elementos del DOM
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Elementos

const btn = $$(".divisas__element-btn");
const divisas = $(".contenedor__caja");
const cantDivisa = $("#numberGBP")
const valorDivisa = $("#number")

// Variables

let divisa = "JPY";
let montoDivisaGBP = "1"

const cargarDatos = async (divisa, monto) => {
  try {
    const host = "api.frankfurter.app";
    const res = await fetch(`https://${host}/latest?amount=${monto}&from=GBP&to=${divisa}`)
    if (res.ok) {
      const datos = await res.json();
      return datos
    } else {
      console.log(res.status);
    }
  } catch (error) {
    console.log(error)
  }
};

let datos = cargarDatos(divisa, montoDivisaGBP).then(datos =>
  valorDivisa.value = datos.rates[divisa]);

cantDivisa.addEventListener("keydown", (event) => {
  const key = event.keyCode;
  if (cantDivisa.value <= "1" && key == 38) {
    montoDivisaGBP = 1;
    cantDivisa.value = 0;
  } else if (cantDivisa.value > "1" && key == 38) {
    cantDivisa.value = cantDivisa.value - 1;
  } else if (cantDivisa.value > "1" && key == 40) {
    cantDivisa.value = Number(cantDivisa.value) + Number(1);
  } 
})

cantDivisa.addEventListener("keyup", (event) => {
  montoDivisaGBP = cantDivisa.value;
  const key = event.key;
  if (cantDivisa.value <= "1") {
    montoDivisaGBP = 1;
    cantDivisa.value = 1;
    datos = cargarDatos(divisa, montoDivisaGBP).then(datos =>
      valorDivisa.value = datos.rates[divisa]);
  } else {
    datos = cargarDatos(divisa, montoDivisaGBP).then(datos =>
      valorDivisa.value = datos.rates[divisa]);
  }
})


btn.forEach((element) => {
  element.addEventListener("click", () => {
    divisa = element.value;
    datos = cargarDatos(divisa, montoDivisaGBP).then(datos => valorDivisa.value = datos.rates[divisa]);
  });
});



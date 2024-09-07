// Seleccionar elementos del DOM
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// Elementos 

const btn = $$(".divisas__element-btn");


btn.forEach(element => {
  element.addEventListener("click", () => {
    console.log(element.value)
  });
});



// Traer los datos de la API

const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
  .then(resp => resp.json())
  .then((data) => {
    alert(`10 GBP = ${data.rates.USD} USD`);
  });




import { sumar } from './logic.mjs';

const formulario = document.querySelector('#calculadora');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const primerNumero = Number(document.querySelector('#numero1').value);
  const segundoNumero = Number(document.querySelector('#numero2').value);
  try {
    const total = sumar(primerNumero, segundoNumero);
    resultado.textContent = `${primerNumero} + ${segundoNumero} = ${total}`;
    resultado.dataset.estado = 'correcto';
  } catch (error) {
    resultado.textContent = error.message;
    resultado.dataset.estado = 'error';
  }
});

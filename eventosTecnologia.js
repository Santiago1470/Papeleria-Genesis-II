let detalles1 = document.getElementById('detalles1');
let detalles2 = document.getElementById('detalles2');
let detalles3 = document.getElementById('detalles3');

let verDetalles1 = document.getElementById('verDetalles1');
let verDetalles2 = document.getElementById('verDetalles2');
let verDetalles3 = document.getElementById('verDetalles3');

let flecha1 = document.getElementById('flecha1');
let flecha2 = document.getElementById('flecha2');
let flecha3 = document.getElementById('flecha3');

let x1 = document.getElementById('x1');
let x2 = document.getElementById('x2');
let x3 = document.getElementById('x3');

let linea1 = document.getElementById('linea1');
let linea2 = document.getElementById('linea2');
let linea3 = document.getElementById('linea3');

let texto1 = document.getElementById('texto1');
let texto2 = document.getElementById('texto2');
let texto3 = document.getElementById('texto3');

detalles1.addEventListener('click', abrCerDetalles1);
detalles2.addEventListener('click', abrCerDetalles2);
detalles3.addEventListener('click', abrCerDetalles3);

function abrCerDetalles1() {
  flecha1.classList.toggle('ocultar');
  x1.classList.toggle('mostrar');
  linea1.classList.toggle('mostrar');
  texto1.classList.toggle('mostrar');

  if (flecha1.classList.contains('ocultar')) {
    verDetalles1.innerHTML = 'CERRAR DETALLES';
  }
  else {
    verDetalles1.innerHTML = 'VER DETALLES';
  }
}

function abrCerDetalles2() {
  flecha2.classList.toggle('ocultar');
  x2.classList.toggle('mostrar');
  linea2.classList.toggle('mostrar');
  texto2.classList.toggle('mostrar');

  if (flecha2.classList.contains('ocultar')) {
    verDetalles2.innerHTML = 'CERRAR DETALLES';
  }
  else {
    verDetalles2.innerHTML = 'VER DETALLES';
  }
}

function abrCerDetalles3() {
  flecha3.classList.toggle('ocultar');
  x3.classList.toggle('mostrar');
  linea3.classList.toggle('mostrar');
  texto3.classList.toggle('mostrar');

  if (flecha3.classList.contains('ocultar')) {
    verDetalles3.innerHTML = 'CERRAR DETALLES';
  }
  else {
    verDetalles3.innerHTML = 'VER DETALLES';
  }
}
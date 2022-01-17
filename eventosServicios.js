let detalles1 = document.getElementById('detalles1');
let detalles2 = document.getElementById('detalles2');
let detalles3 = document.getElementById('detalles3');
let detalles4 = document.getElementById('detalles4');
let detalles5 = document.getElementById('detalles5');
let detalles6 = document.getElementById('detalles6');
let detalles7 = document.getElementById('detalles7');
let detalles8 = document.getElementById('detalles8');
let detalles9 = document.getElementById('detalles9');

let verDetalles1 = document.getElementById('verDetalles1');
let verDetalles2 = document.getElementById('verDetalles2');
let verDetalles3 = document.getElementById('verDetalles3');
let verDetalles4 = document.getElementById('verDetalles4');
let verDetalles5 = document.getElementById('verDetalles5');
let verDetalles6 = document.getElementById('verDetalles6');
let verDetalles7 = document.getElementById('verDetalles7');
let verDetalles8 = document.getElementById('verDetalles8');
let verDetalles9 = document.getElementById('verDetalles9');

let flecha1 = document.getElementById('flecha1');
let flecha2 = document.getElementById('flecha2');
let flecha3 = document.getElementById('flecha3');
let flecha4 = document.getElementById('flecha4');
let flecha5 = document.getElementById('flecha5');
let flecha6 = document.getElementById('flecha6');
let flecha7 = document.getElementById('flecha7');
let flecha8 = document.getElementById('flecha8');
let flecha9 = document.getElementById('flecha9');

let x1 = document.getElementById('x1');
let x2 = document.getElementById('x2');
let x3 = document.getElementById('x3');
let x4 = document.getElementById('x4');
let x5 = document.getElementById('x5');
let x6 = document.getElementById('x6');
let x7 = document.getElementById('x7');
let x8 = document.getElementById('x8');
let x9 = document.getElementById('x9');

let linea1 = document.getElementById('linea1');
let linea2 = document.getElementById('linea2');
let linea3 = document.getElementById('linea3');
let linea4 = document.getElementById('linea4');
let linea5 = document.getElementById('linea5');
let linea6 = document.getElementById('linea6');
let linea7 = document.getElementById('linea7');
let linea8 = document.getElementById('linea8');
let linea9 = document.getElementById('linea9');

let texto1 = document.getElementById('texto1');
let texto2 = document.getElementById('texto2');
let texto3 = document.getElementById('texto3');
let texto4 = document.getElementById('texto4');
let texto5 = document.getElementById('texto5');
let texto6 = document.getElementById('texto6');
let texto7 = document.getElementById('texto7');
let texto8 = document.getElementById('texto8');
let texto9 = document.getElementById('texto9');


detalles1.addEventListener('click', abrCerDetalles1);
detalles2.addEventListener('click', abrCerDetalles2);
detalles3.addEventListener('click', abrCerDetalles3);
detalles4.addEventListener('click', abrCerDetalles4);
detalles5.addEventListener('click', abrCerDetalles5);
detalles6.addEventListener('click', abrCerDetalles6);
detalles7.addEventListener('click', abrCerDetalles7);
detalles8.addEventListener('click', abrCerDetalles8);
detalles9.addEventListener('click', abrCerDetalles9);

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

function abrCerDetalles4() {
  flecha4.classList.toggle('ocultar');
  x4.classList.toggle('mostrar');
  linea4.classList.toggle('mostrar');
  texto4.classList.toggle('mostrar');

  if (flecha4.classList.contains('ocultar')) {
    verDetalles4.innerHTML = 'CERRAR DETALLES';
  }
  else {
    verDetalles4.innerHTML = 'VER DETALLES';
  }
}

function abrCerDetalles5() {
  flecha5.classList.toggle('ocultar');
  x5.classList.toggle('mostrar');
  linea5.classList.toggle('mostrar');
  texto5.classList.toggle('mostrar');

  if (flecha5.classList.contains('ocultar')) {
    verDetalles5.innerHTML = 'CERRAR DETALLES';
  }
  else {
    verDetalles5.innerHTML = 'VER DETALLES';
  }
}

function abrCerDetalles6() {
  flecha6.classList.toggle('ocultar');
  x6.classList.toggle('mostrar');
  linea6.classList.toggle('mostrar');
  texto6.classList.toggle('mostrar');

  if (flecha6.classList.contains('ocultar')) {
    verDetalles6.innerHTML = 'CERRAR DETALLES';
  }
  else {
    verDetalles6.innerHTML = 'VER DETALLES';
  }
}

function abrCerDetalles7() {
  flecha7.classList.toggle('ocultar');
  x7.classList.toggle('mostrar');
  linea7.classList.toggle('mostrar');
  texto7.classList.toggle('mostrar');

  if (flecha7.classList.contains('ocultar')) {
    verDetalles7.innerHTML = 'CERRAR DETALLES';
  }
  else {
    verDetalles7.innerHTML = 'VER DETALLES';
  }
}

function abrCerDetalles8() {
  flecha8.classList.toggle('ocultar');
  x8.classList.toggle('mostrar');
  linea8.classList.toggle('mostrar');
  texto8.classList.toggle('mostrar');

  if (flecha8.classList.contains('ocultar')) {
    verDetalles8.innerHTML = 'CERRAR DETALLES';
  }
  else {
    verDetalles8.innerHTML = 'VER DETALLES';
  }
}

function abrCerDetalles9() {
  flecha9.classList.toggle('ocultar');
  x9.classList.toggle('mostrar');
  linea9.classList.toggle('mostrar');
  texto9.classList.toggle('mostrar');

  if (flecha9.classList.contains('ocultar')) {
    verDetalles9.innerHTML = 'CERRAR DETALLES';
  }
  else {
    verDetalles9.innerHTML = 'VER DETALLES';
  }
}
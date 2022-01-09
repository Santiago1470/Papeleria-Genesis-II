var clic = 1;

function operarMenu() {
  if (clic == 1) {
    obj = document.getElementById('hola');
    obj.style.display = 'block';
    clic = clic + 1;
  } else {
    obj = document.getElementById('hola');
    obj.style.display = 'none';
    clic = 1
  }
}

function operarMas() {
  if (clic == 1) {
    obj = document.getElementById('otros');
    obj.style.display = 'block';
    clic = clic + 1;
  } else {
    obj = document.getElementById('otros');
    obj.style.display = 'none';
    clic = 1
  }
}

function operarMas2() {
  if (clic == 1) {
    obj = document.getElementById('otros2');
    obj.style.display = 'block';
    clic = clic + 1;
  } else {
    obj = document.getElementById('otros2');
    obj.style.display = 'none';
    clic = 1
  }
}

function detallesTecno() {
  if (clic == 1) {
    img = document.getElementById('producto');
    fondo = document.getElementById('fondoG');
    img.style.display = 'block';
    fondo.style.opacity = '0.6';
    fondo.style.pointerEvents = 'none';

    clic = clic + 1;
  } else {
    img = document.getElementById('producto');
    fondo = document.getElementById('fondoG');
    img.style.display = 'none';
    fondo.style.opacity = '1';
    fondo.style.pointerEvents = 'visible';

    clic = 1
  }
}

function detallesTecno2() {
  if (clic == 1) {
    img = document.getElementById('producto2');
    fondo = document.getElementById('fondoG');
    img.style.display = 'block';
    fondo.style.opacity = '0.6';
    fondo.style.pointerEvents = 'none';

    clic = clic + 1;
  } else {
    img = document.getElementById('producto2');
    fondo = document.getElementById('fondoG');
    img.style.display = 'none';
    fondo.style.opacity = '1';
    fondo.style.pointerEvents = 'visible';

    clic = 1
  }
}

function detallesTecno3() {
  if (clic == 1) {
    img = document.getElementById('producto3');
    fondo = document.getElementById('fondoG');
    img.style.display = 'block';
    fondo.style.opacity = '0.6';
    fondo.style.pointerEvents = 'none';

    clic = clic + 1;
  } else {
    img = document.getElementById('producto3');
    fondo = document.getElementById('fondoG');
    img.style.display = 'none';
    fondo.style.opacity = '1';
    fondo.style.pointerEvents = 'visible';

    clic = 1
  }
}

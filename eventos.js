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

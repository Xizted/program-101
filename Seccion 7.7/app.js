// Solucion 1

function max(a, b, c) {
  let mayor = Math.max(a, b, c);

  return mayor;
}

let mayor = max(5, 2, 6);

console.log(mayor);

// Solucion 2

function max2(a, b, c) {
  let mayor;

  if (a > b) {
    if (a > c) {
      mayor = a;
    } else {
      mayor = c;
    }
  } else {
    if (b > c) {
      mayor = b;
    }else {
      mayor = c;
    }
  }

  return mayor;
}

let mayor2 = max2(5, 2, 6);

console.log(mayor2);

/*
FizzBuzz
Descripción

Escriba una función llamada geekshubs que imprima un rango de números del 1 a N.

Para cada múltiplo de 3, imprima "Geeks" en lugar del número. Para cada múltiplo de 5, imprima "Hubs" en lugar del número. Para los números que son múltiplos de 3 y 5, imprima "GeeksHubs" en lugar del número. Cada número debe de estar en una línea nueva. El resultado se debe de ser una string.
Ejemplo


geekshubs(3) === '1\n2\nGeeks\n'

geekshubs(16) debe de devolver:

1
2
Geeks
4
Hubs
Geeks
7
8
Geeks
Hubs
11
Geeks
13
14
GeeksHubs
16
*/

function geekshubs(index) {
  let result = '';

  for (let i = 1; i <= index; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "GeeksHubs\n";
    } else if (i % 5 === 0) {
      result += "Hubs\n";
    } else if (i % 3 === 0 ) {
      result += "Geeks\n";
    } else {
      result += `${i}\n`;
    }
  }
  return result;
}

geekshubs(16);
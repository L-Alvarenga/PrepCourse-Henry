// La función recibe un número "n" por argumento.
// Devuelve la suma de todos los números desde 1 hasta n.
// Tu código:

function sumarHastaN(n) {
var suma = 0;

for (var i = 1; i <= n; i++){
  suma = suma + i;
}
return suma;

}


module.exports = sumarHastaN;

let nombre = "Yeiner Escobar";
let nota1 = 4.2;
let nota2 = 3.8;
let nota3 = 4.0;

let promedio = (nota1 + nota2 + nota3) / 3;

console.log(`Estudiante: ${nombre}`);
console.log(`Promedio: ${promedio}`);

if (promedio >= 3.5) {
  console.log("Aprobaste");
} else {
  console.log("No aprobaste");
}

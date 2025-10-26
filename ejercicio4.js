let num = parseInt(prompt("Cuantos numeros quieres ingresar?:"))

for(let i = 1; i < num; i++){
    let num2 = parseInt(prompt(`Ingresa valor ${num}`))
if (num2 % 2 === 0) {
  console.log(`${num2} es un numero par`);
} else {
  console.log(`${num2} es un numero impar`);
}
}


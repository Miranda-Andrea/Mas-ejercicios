//Escriba un programa que solicite al usuario sus datos: 
//nombre de usuario, edad y una lista de sus películas favoritas. 
//Almacene la información y luego muéstrela en la consola. 
//Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 
//'La película {película} es una de mis favoritas'.

var nombreUsuario = prompt('Ingrese su nombre de usuario:');
var edadUsuario = prompt('Ingrese su edad:');
var peliculasFavoritas = prompt('Ingrese una lista de sus películas favoritas separadas por comas:');

// Convertir la lista de películas a un array
var listaPeliculas = peliculasFavoritas.split(',');

console.log('Datos del usuario:');
console.log('Nombre de usuario: ' + nombreUsuario);
console.log('Edad: ' + edadUsuario);

console.log('\nPelículas favoritas:');
// Iterar sobre el array de películas y mostrar un mensaje para cada una
for (var i = 0; i < listaPeliculas.length; i++) {
  console.log('La película ' + listaPeliculas[i].trim() + ' es una de mis favoritas.');
}



//Escribe un programa que solicite 10 números. 
//Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, 
//determine y genere el mayor de esos números.

var numeros = [];
for (var i = 1; i <= 10; i++) {
  var numero = parseFloat(prompt('Ingrese el número ' + i + ':'));
  numeros.push(numero);
}

// Inicializar la variable para almacenar el mayor número
var mayorNumero = numeros[0];

// Iterar sobre el array para encontrar el mayor número
for (var j = 1; j < numeros.length; j++) {
  if (numeros[j] > mayorNumero) {
    mayorNumero = numeros[j];
  }
}

console.log('El mayor número ingresado es: ' + mayorNumero);



//Escribe un programa que pregunte a un usuario la cantidad de segundos 
//necesarios hasta que se ejecute una alarma (mensaje) 
//junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.

var segundos = parseInt(prompt('Ingrese la cantidad de segundos para la alarma:'));

// Función para mostrar la alarma después de la cantidad de segundos ingresada
function mostrarAlarma() {
  console.log('¡Alarma! Han pasado ' + segundos + ' segundos.');
}

// Establecer el temporizador para ejecutar la función después de la cantidad de segundos
setTimeout(mostrarAlarma, segundos * 1000); // Convertir segundos a milisegundos

console.log('Alarma configurada para ejecutarse en ' + segundos + ' segundos...');



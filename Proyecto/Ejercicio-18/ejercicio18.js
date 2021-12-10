// Ejercicio 18
let moment = require("moment");
let express = require("express");

//Creo servidor

const server = express ();

server.listen(3000, ()=>{
    console.log('Wenas tardes bienvenido a su servilleta')
});

server.get('/', (req, res)=>{
    res.send('Bienvenido sea uste a su servilleta')
})

//Hora Local
let muestraHoraLocal = moment(new Date());
console.log(muestraHoraLocal);

//Horario Utc
let muestraUtc = moment(new Date()).utc();
console.log(muestraUtc);

//Cálculo de la diferencia horaria entre hora local y UTC.
let diferencia = moment(muestraUtc.diff(muestraHoraLocal));
console.log(
  `La diferencia de horas entre la hora local y la utc es de ${diferencia.hours()} horas`
);

//La mayor de las dos fechas -luego de realizar la comparación entre ambas-
if (muestraHoraLocal > muestraUtc) {
  console.log("La hora local es mayor");
} else {
  console.log("La hora Utc es mayor");
}

// Instalar la librería cool-images, y crear un script para traer una imagen de manera aleatoria.
const coolImages = require("cool-images");
let imagen = coolImages.one();
console.log(imagen);


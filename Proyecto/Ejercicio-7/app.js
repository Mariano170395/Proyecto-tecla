const cantidadFotos = prompt("ingresa cuantas fotos tienes?");
console.log(cantidadFotos);

for (let i = 0; i < cantidadFotos; i++) {
  let cantidadLikes = prompt(
    `Cuantos likes tiene la foto ${parseInt([i]) + 1}`
  );
  if (cantidadLikes < 1) {
    console.log("Esta foto no tiene likes");
  } else if (cantidadLikes < 10) {
    alert(`La foto ${parseInt([i]) + 1} tiene menos de 10 likes`);
    console.log(`La foto ${parseInt([i]) + 1} tiene ${cantidadLikes} likes`);
  } else if (cantidadLikes >= 1) {
    console.log(`La foto ${parseInt([i]) + 1} tiene ${cantidadLikes} likes`);
  }
}

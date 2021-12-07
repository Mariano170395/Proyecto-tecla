const url = "https://randomuser.me/api/";

const getNombre = async () => {
  try {
    const respuesta = await fetch(url);
    const post = await respuesta.json();
    let nombre = '<h1 class="Nombre"></h1>';
    nombre += `<h1 class="Nombre">${post.results[0].name.first} ${post.results[0].name.last}</h1>`;
    document.getElementById("Nombre").innerHTML = nombre;
  } catch (error) {
    console.log("algo salio mal");
  }
};

getNombre();

const getFoto = async() =>{
    try {
        const respuesta = await fetch(url)
        const post = await respuesta.json()
        let imagen = '<img class="fotoPerfil" src="" alt="Perfil"></img>';
        imagen += `<img class="fotoPerfil" src="${post.results[0].picture.medium}" alt="Perfil"></img>`
        document.getElementById("ImagenPerfil1").innerHTML = imagen;
        console.log(post.results[0].picture.medium)
    } catch (error) {
        
    }
} 

getFoto()
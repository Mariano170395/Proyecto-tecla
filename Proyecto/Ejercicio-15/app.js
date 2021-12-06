const url = "https://jsonplaceholder.typicode.com/users";

const getUsersAsync = async () => {
  try {
    const respuesta = await fetch(url);

    const post = await respuesta.json();

    let tabla = "<tr><th>Nombre</th>";

    for (let user of post) {
      tabla += `<tr><td>${user.name}</td></tr>`;
    }
    document.getElementById("tabla1").innerHTML = tabla;
    document.getElementById('obj1').style.display = 'block';
  } catch (error) {
    console.log("Algo salio mal");
  }
};

let clickUsers = () => {
  getUsersAsync();
};

function ocultar(){
    document.getElementById('obj1').style.display = 'none';
    }
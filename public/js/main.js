// Recogemos los campos del DOM que vamos a necesitar actualizar
var nombre = document.getElementById("nombre");
var dni = document.getElementById("dni");
var formacion = document.getElementById("formacion");

// Recuperamos el id del título de la URL
var pathname = window.location.pathname.split("/");
var id = pathname.pop();

// Realizamos la petición al servidor
axios
  .get("http://api.ecad.es/api/titulo/" + id)
  .then((res) => {
    // Actualizamos los campor con la respuesta
    nombre.innerHTML = res.data.nombre;
    dni.innerHTML = res.data.dni;
    formacion.innerHTML = res.data.formacion;
  })
  .catch((err) => {
    // Redireccionamos a la página de error
    window.location.href = "/error.html";
  });

// Evitar el click derecho sobre la página
document.oncontextmenu = function () {
  return false;
};

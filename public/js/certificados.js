// Recogemos los campos del DOM que vamos a necesitar actualizar
var nombre = document.getElementById("nombre");
var formacion = document.getElementById("formacion");
var section = document.getElementById("certificado");
var spinner = document.getElementById("certificado-spinner");
var progress = document.getElementById("certificado-progress");

// Recuperamos el id del título de la URL
var pathname = window.location.search.split("=");
var id = pathname.pop();

section.style.visibility = "hidden";

function onDownloadProgress({ loaded, total }) {
  spinner.setAttribute("aria-valuenow", loaded);
  spinner.setAttribute("aria-valuemax", total);
  var width = (total / loaded) * 100;
  spinner.setAttribute("style", "width: " + width + "%");
}

// Realizamos la petición al servidor
axios
  .get("https://ecad-app.herokuapp.com/api/titulo" + id, {
    onDownloadProgress,
  })
  .then((res) => {
    if (res.status === 204) {
      window.location.href = "/error.html";
    } else {
      nombre.innerHTML = res.data.nombre;
      formacion.innerHTML = res.data.formacion;
      progress.style.display = "none";
      section.style.visibility = "visible";
    }
  })
  .catch((err) => {
    console.log("err", err);
    // Redireccionamos a la página de error
    window.location.href = "/error.html";
  });

// Evitar el click derecho sobre la página
document.oncontextmenu = function () {
  return false;
};

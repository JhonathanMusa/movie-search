const verificarForm = document.getElementsByName("verificar")[0];
const boton = document.getElementById("btn_verificar");

const verificar = (e) => {
  let nombre = verificarForm.nombre.value;
  let contraseña = verificarForm.contraseña.value;

  if (nombre === "") {
    alert("Por favor introduzca un nombre");
    e.preventDefault();
  }

  if (contraseña === "") {
    alert("Por favor introduzca una contraseña");
  }
};

verificarForm.addEventListener("submit", verificar);

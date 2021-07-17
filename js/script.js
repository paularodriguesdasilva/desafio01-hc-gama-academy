const formulario = document.getElementById("formulario");
const btnFechar = document.getElementById("fechaModal");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let nomeCompleto = document.getElementById("nomeCompleto").value;
  let email = document.getElementById("email").value;

  let dados = {
    nomeCompleto,
    email,
  };

  let dadosConvertidos = JSON.stringify(dados);

  localStorage.setItem("dados", dadosConvertidos);

  abreModal();

  document.getElementById("nomeCompleto").value = "";
  document.getElementById("email").value = "";
});

btnFechar.addEventListener("click", () => {
  fechaModal();
});

function abreModal() {
  document.querySelector(".modal-container").classList.add("ativo");
}

function fechaModal() {
  document.querySelector(".modal-container").classList.remove("ativo");
}

export default function initFuncionamento() {
  const data = new Date();
  const hora = data.getHours();
  const dia = data.getDay();
  const dias = document.querySelector("[data-dias]");
  const arrayDias = dias.dataset.dias.split(",");
  const novaArrayDias = arrayDias.map((dia) => {
    return +dia;
  });
  const horas = document.querySelector("[data-horas]");
  const arrayHoras = horas.dataset.horas.split(", ");
  const novaArrayHoras = arrayHoras.map((hora) => {
    return +hora;
  });
  const funcionamento = document.querySelector(".funcionamento");
  if (
    hora > novaArrayHoras[0] &&
    hora < novaArrayHoras[1] &&
    dia >= novaArrayDias[0] &&
    dia <= novaArrayDias[4]
  ) {
    funcionamento.classList.remove("fechado");
    funcionamento.classList.add("aberto");
  } else {
    funcionamento.classList.remove("aberto");
    funcionamento.classList.add("fechado");
  }
}

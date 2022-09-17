export default function initMenu() {
  const menu = document.querySelector("[data-menu]");
  const botao = document.querySelector(".menu");

  function botaoMenu() {
    menu.classList.toggle(menu.dataset.menu);
  }
  botao.addEventListener("click", botaoMenu);
}

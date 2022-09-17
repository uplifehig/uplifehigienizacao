export default function initScrollSuave() {
  const links = document.querySelectorAll("a[href^='#']");
  function handleClick(event) {
    event.preventDefault();
    const id = event.target.getAttribute("href");
    const contato = document.querySelector(id);
    contato.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  links.forEach((link) => {
    link.addEventListener("click", handleClick);
  });
}

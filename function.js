const button = document.querySelector(".menu-icon");
const none_menu = document.querySelector(".left-content");
const popup_menu = document.querySelector(".popup-menu");
const film = document.querySelector(".films");
const iframes = document.querySelectorAll(".iframe");

function menu() {
  popup_menu.classList.toggle("open");
  none_menu.classList.toggle("none");
  film.classList.toggle("filmss");

  iframes.forEach((iframe) => {
    iframe.classList.toggle("iframed");
  });
}

button.addEventListener("click", menu);

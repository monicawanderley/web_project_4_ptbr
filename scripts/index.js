/* Abrir o form*/
const editButton = document.querySelector(".button__edit");
const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__aboutme");
const formName = document.querySelector(".form__name");
const formAbout = document.querySelector(".form__aboutme");

editButton.addEventListener("click", function () {
  popup.classList.toggle("popup_opened");
  formName.value = profileName.textContent;
  formAbout.value = profileAbout.textContent;
});

/* Fechar o formulário*/
const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", function () {
  popup.classList.toggle("popup_opened");
});

/* Trocar as informações e Salvar o conteúdo*/
const editForm = document.querySelector(".form");

editForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileAbout.textContent = formAbout.value;
  popup.classList.toggle("popup_opened");
});

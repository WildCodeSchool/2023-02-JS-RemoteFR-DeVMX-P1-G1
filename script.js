window.addEventListener("load", () => {
  const modal = document.querySelector(".modal");

  const modalStartButton = document.querySelector(".modal-start-button");

  modalStartButton.addEventListener("click", () => {
    modal.classList.add("modal-hidden");
  });
});

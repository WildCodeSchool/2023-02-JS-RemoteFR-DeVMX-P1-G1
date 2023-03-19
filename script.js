window.addEventListener("load", () => {
  const modal = document.querySelector(".modal");

  const modalStartButton = document.querySelector(".modal-start-button");

  console.log(modalStartButton);

  modalStartButton.addEventListener("click", () => {
    modal.classList.add("modal-hidden");
  });

});

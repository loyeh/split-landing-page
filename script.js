let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", (e) => {
    box.classList.add("active");
  });
  box.addEventListener("mouseout", (e) => {
    box.classList.remove("active");
  });
});

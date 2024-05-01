let boxes = document.querySelectorAll(".box");
boxes = Array.from(boxes);

console.log(boxes[0].classList[1]);

boxes.forEach((box) => {
  box.addEventListener("mouseover", (e) => {
    console.log(e.target);
    box.classList.add("active");
  });
  box.addEventListener("mouseout", (e) => {
    console.log(e.target);
    box.classList.remove("active");
  });
});

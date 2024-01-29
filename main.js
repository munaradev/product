const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let btn = document.querySelector(".btnThree"),
  body = document.querySelector("body");

btn.addEventListener("click", () => {
  if (body.className === "white") {
    body.classList.replace("white", "dark");
  } else {
    body.classList.replace("dark","white");
  }
});





const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      "@450": {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      "992": {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      "1024": {
          slidesPerView: 2.5,
          spaceBetween: 40,
      },
      "1440": {
          slidesPerView: 3,
          spaceBetween: 50,
      },
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





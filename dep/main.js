let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let videoBtn = document.querySelectorAll(".vid-btn");
let navbar = document.querySelector(".navbar");
//　変更点
let activeVideo = document.querySelector(".controls .active");
let videoSlider = document.querySelector("#video-slider");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

videoBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeVideo.classList.remove("active");
      btn.classList.add("active");
      let src = btn.getAttribute("data-src");
      videoSlider.src = src;
      activeVideo = btn;
      
    });
  });





// videoBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const active = document.querySelector(".controls .active");
//       active.classList.remove("active");
//       let newMovie = document.querySelector(``);
//       btn.classList.add("active");
//       let src = btn.getAttribute("data-src");
//       document.querySelector("#video-slider").src = src;
//     });
//   });






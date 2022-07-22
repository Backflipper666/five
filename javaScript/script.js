const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1.3,
  centeredSlides: false,
  spaceBetween: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

 
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  
});

let button = document.querySelector("button.btn");
let expand = document.querySelector("span.btn__expand");
let text = document.querySelector("span.btn__text");

//query selector to hide logos for tablet 
let tablet = document.querySelectorAll("img.tablet")
//qs to hide for desktop
let desktop = document.querySelectorAll("img.desktop")

if (window.matchMedia("screen and (min-width: 767px) and (max-width:1119px)").matches) {  
  button.addEventListener("click", ()=>{
    if (text.textContent == "Скрыть"){
      for(let element of tablet){
        element.classList.remove("shower")
        element.classList.add("hider");
      }
      expand.setAttribute("style", "transform:rotate(180deg);")
      text.textContent = "Показать все";
    }
    else{
      for(let element of tablet){
        element.classList.remove("hider")
        element.classList.add("shower")
      }
      expand.setAttribute("style", "transform:rotate(360deg);")
      text.textContent = "Скрыть";
    }
  })
  
} 

else if (window.matchMedia('screen and (min-width: 1120px)').matches) {
  button.addEventListener("click", ()=>{
    if (text.textContent == "Скрыть"){
      for(let element of desktop){
        element.classList.remove("shower")
        element.classList.add("hider");
      }
      expand.setAttribute("style", "transform:rotate(180deg);")
      text.textContent = "Показать все";
    }
    else{
      for(let element of desktop){
        element.classList.remove("hider")
        element.classList.add("shower")
      }
      expand.setAttribute("style", "transform:rotate(360deg);")
      text.textContent = "Скрыть";
    }
  })
} 
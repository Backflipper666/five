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
//.labels__lenovo2, .labels__samsung2, .labels__apple2
let lenovo2 = document.querySelector("img.labels__lenovo2");
let apple2 = document.querySelector("img.labels__apple2");
let samsung2 = document.querySelector("img.labels__samsung2");
let expand = document.querySelector("span.btn__expand");
let text = document.querySelector("span.btn__text");

//setting variables for tablet version
let viewSonic = document.querySelector("img.labels__view-sonic");
let sony = document.querySelector("img.labels__sony");

//query selector to hide logos for tablet 
let tablet = document.querySelectorAll("img.tablet")
console.log(tablet);

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
      lenovo2.setAttribute("style", "visibility:hidden; display:none;");
      apple2.setAttribute("style", "visibility:hidden; display:none;");
      samsung2.setAttribute("style", "visibility:hidden; display:none;");
      expand.setAttribute("style", "transform:rotate(180deg);")
      text.textContent = "Показать все";
    }
    else{
      lenovo2.setAttribute("style", "visibility:visible; display:inline-block;");
      apple2.setAttribute("style", "visibility:visible; display:inline-block;");
      samsung2.setAttribute("style", "visibility:visible; display:inline-block;");
      expand.setAttribute("style", "transform:rotate(360deg);")
      text.textContent = "Скрыть";
    }
  })
} 
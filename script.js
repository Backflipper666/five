const swiper = new Swiper('.swiper', {
  // Optional parameters


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
let expand = document.querySelector("img.btn__expand");
let text = document.querySelector("span.btn__text");

//setting variables for tablet version
let viewSonic = document.querySelector("img.labels__view-sonic");
let sony = document.querySelector("img.labels__sony");





if ($(window).width() > 767 && $(window).width() <= 1199 ) {
  button.addEventListener("click", ()=>{
    if (text.textContent == "Скрыть"){
      lenovo2.setAttribute("style", "visibility:hidden; display:none;");
      apple2.setAttribute("style", "visibility:hidden; display:none;");
      samsung2.setAttribute("style", "visibility:hidden; display:none;");
      viewSonic.setAttribute("style", "visibility:hidden; display:none;");
      sony.setAttribute("style", "visibility:hidden; display:none;");
      expand.setAttribute("style", "transform:rotate(180deg);")
      text.textContent = "Показать все";
    }
    else{
      lenovo2.setAttribute("style", "visibility:visible; display:inline-block;");
      apple2.setAttribute("style", "visibility:visible; display:inline-block;");
      samsung2.setAttribute("style", "visibility:visible; display:inline-block;");
      viewSonic.setAttribute("style", "visibility:visible; display:inline-block;");
      sony.setAttribute("style", "visibility:visible; display:inline-block;");
      expand.setAttribute("style", "transform:rotate(360deg);")
      text.textContent = "Скрыть";
    }
  })
}
else if ($(window).width() >= 1200){
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


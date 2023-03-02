//

  $(".slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });



  VanillaTilt.init(document.querySelectorAll(".about__inner"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
  });

  


  function onEntry(entry) {
    entry.forEach(change => {
      if(change.isIntersecting) {
        change.target.classList.add('element-show');
      }
  });
  }


  let options = {
    threshold: [0.5]
  };
  let observer = new
  IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(
    ".about__company-box-text, .about__company-box p"
  );

  for(let elm of elements) {
    observer.observe(elm);
  }


  /* БУРГЕР */

$(function(){
  $(".menu__btn").on("click", function (click) {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu").toggleClass("menu--active");
  });

   $('.menu__list-link').on('click', function (){
     $('.menu__btn').removeClass('menu__btn--active');
     $('.menu__list').removeClass('menu__list--active');
     $('.menu').removeClass('menu--active');
   });



});

/* БУРГЕР */
    
  

   

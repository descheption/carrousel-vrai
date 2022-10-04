window.onload = function(){
    var slides = document.getElementsByClassName('carousel-item'),
        addActive = function(slide) {slide.classList.add('active')},
        removeActive = function(slide) {slide.classList.remove('active')};
    addActive(slides[0]);
    
    setInterval(function (){
      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          slides[0].style.zIndex = 100;
          setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
          break;
        }
        if (slides[i].classList.contains('active')) { 
          slides[i].removeAttribute('style');
          setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, 1000);
  }
    


  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
  
  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });
  
  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });

  
  const slideContainer = document.getElementById("slide-container");
  const slides = document.querySelector(".slide");
  const prev1Button = document.getElementById("slide-arrow-prev1");
  const next1Button = document.getElementById("slide-arrow-next1");
  
  next1Button.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft += slideWidth;
  });
  
  prev1Button.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft -= slideWidth;
  });

  
  const slideContainers = document.getElementById("slide-containers");
  const slidess = document.querySelector(".slide");
  const prev2Button = document.getElementById("slide-arrow-prev2");
  const next2Button = document.getElementById("slide-arrow-next2");
  
  next2Button.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slideContainers.scrollLeft += slideWidth;
  });
  
  prev2Button.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slideContainers.scrollLeft -= slideWidth;
  });

  const slidesContainers = document.getElementById("slides-containers");
  const slidesss = document.querySelector(".slide");
  const prev3Button = document.getElementById("slide-arrow-prev3");
  const next3Button = document.getElementById("slide-arrow-next3");
  
  next3Button.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainers.scrollLeft += slideWidth;
  });
  
  prev3Button.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainers.scrollLeft -= slideWidth;
  });

  
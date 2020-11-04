 /*stores the index of the current slide to d
 etermine the current slide.*/
let currentSlide = 0;


/*store each slide into a 
array which enables us to iterate over them*/

const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

function imgSlider(n){
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", imgSlider(currentSlide))


/* functions for previous and next buttons*/

function next(){
  if(currentSlide >= slides.length - 1){
    currentSlide = 0 
  }else{
    currentSlide++
  }
   
  imgSlider(currentSlide)
}

function prev(){
  if(currentSlide <= 0){
    currentSlide = slides.length - 1 
  } else{
    currentSlide--
 
  }
  imgSlider(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)



/* timer for the iteration of the slides to change automatically*/

setInterval(() => {
  next()
}, 5000);


dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    imgSlider(i)
    currentSlide = i
  })
})

const headerTag = document.querySelector("header")
// const aheaderTag = document.querySelector("header ul a")
const headericonTag = document.querySelector(".menu")


document.addEventListener("scroll", function(){
  if(window.scrollY > headerTag.getBoundingClientRect().height){
    headerTag.classList.add("scrolled");
    // aheaderTag.classList.add("scrolled");
    headericonTag.classList.add("scrolled");

  }else{
    headerTag.classList.remove("scrolled");
    // aheaderTag.classList.remove("scrolled");
    headericonTag.classList.remove("scrolled");
  }

})




var swiper = new Swiper(".mySwiper", {
slidesPerView: 2.5,
spaceBetween: 30,
centeredSlides: true,
loop: true,
autoplay: {
delay: 2500,
disableOnInteraction: false,
}
});
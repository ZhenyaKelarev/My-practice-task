const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
// Buttons
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
prevBtn.setAttribute("disabled", "disabled");
prevBtn.classList.remove("active");


let counter = 0;
let size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    checkButtons();
});
// prevBtn.addEventListener('click', movePrev);
prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    checkButtons();
});
function checkButtons(){
    if (counter == 0) {
        prevBtn.setAttribute("disabled", "disabled");
        prevBtn.classList.remove("active");

    } else if(counter == carouselImages.length - 1){
        nextBtn.setAttribute("disabled", "disabled");
        nextBtn.classList.remove("active");

    } else {
        prevBtn.removeAttribute("disabled");
        nextBtn.removeAttribute("disabled");
        prevBtn.classList.add("active");
        nextBtn.classList.add("active");

    }
}
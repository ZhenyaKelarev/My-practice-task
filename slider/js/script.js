
const slider = (function() {
    let sliders = document.querySelector(".sliders");

    function clickNextBtn (counter,carouselSlide,imageWidth,prevBtn,nextBtn,carouselImages) {
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
        console.log("click");
        console.log(counter);
        checkButtons(counter,prevBtn,nextBtn,carouselImages);
    }
    function clickPrevBtn (counter,carouselSlide,imageWidth,prevBtn,nextBtn,carouselImages) {
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
        console.log("click");
        console.log(counter);
        checkButtons(counter,prevBtn,nextBtn,carouselImages);
    }

    function checkButtons(counter,prevBtn,nextBtn,carouselImages){
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
    // ФУНКЦИЯ СОЗДАНИЯ СЛАЙДЕРА
    let createSlider = function(classTest,img1, img2, color) {
        let sliderDiv = document.createElement("div");
        let carouselContainer = document.createElement("div");
        let carouselSlide = document.createElement("div");
        let image1 = document.createElement("img");
        let image2 = document.createElement("img");
        let imageWidth = image1.clientWidth;

        carouselContainer.className = "carousel-container";
        carouselSlide.className = "carousel-slide";
        image1.setAttribute("src", img1);
        image2.setAttribute("src", img2);

        sliderDiv.className = classTest;

        let carouselImages = document.querySelectorAll(".carousel-slide img");

        let fragment = document.createDocumentFragment();
        fragment.appendChild(sliderDiv);

        sliders.appendChild(fragment);
        sliderDiv.appendChild(carouselContainer);
        carouselContainer.appendChild(carouselSlide);
        carouselSlide.appendChild(image1);
        carouselSlide.appendChild(image2);

        createButtons(sliderDiv,color,carouselSlide,imageWidth,carouselImages);
        return sliderDiv;
    }
    // ФУНКЦИЯ СОЗДАНИЯ КНОПОК ДЛЯ СЛАЙДЕРА
    function createButtons(sliderDiv,color,carouselSlide,imageWidth,carouselImages) {
        let prevBtn = document.createElement("button");
        let nextBtn = document.createElement("button");
        let buttons = document.createElement("div");
        let prevSpan = document.createElement("span");
        let nextSpan = document.createElement("span");
        
        buttons.className = "buttons";
        nextBtn.className = "next button active";
        prevBtn.className = "prev button active";

        prevSpan.innerText = "Prev";
        nextSpan.innerText = "Next";

        prevBtn.setAttribute("disabled", "disabled");
        prevBtn.classList.remove("active");

        let counter = 0;
        prevBtn.addEventListener('click', clickPrevBtn(counter,carouselSlide,imageWidth,prevBtn,nextBtn,carouselImages));
        nextBtn.addEventListener('click', clickNextBtn(counter,carouselSlide,imageWidth,prevBtn,nextBtn,carouselImages));

        let fragment = document.createDocumentFragment();

        fragment.appendChild(buttons);
        sliderDiv.appendChild(fragment);
        nextBtn.appendChild(nextSpan);
        prevBtn.appendChild(prevSpan);
        buttons.appendChild(prevBtn);
        buttons.appendChild(nextBtn);

        nextBtn.style.backgroundColor = color;
        prevBtn.style.backgroundColor = nextBtn.style.backgroundColor;
    }
    let colorBtnFunc = function(color) {
        nextBtn.style.backgroundColor = color;
        prevBtn.style.backgroundColor = nextBtn.style.backgroundColor;
        return nextBtn;
    }
    return {
        createSlider : createSlider
    } 
})();
slider.createSlider("yarik","images/cat3.jpg","images/cat2.jpg","red");







// старый вариант
// const slider = (function() {
//     let sliders = document.querySelector(".sliders");
//     let carouselSlide = document.querySelector(".carousel-slide");
//     const carouselImages = document.querySelectorAll(".carousel-slide img");
//     // Buttons
//     let prevBtn = document.querySelector(".prev");
//     let nextBtn = document.querySelector(".next");
    
//     prevBtn.setAttribute("disabled", "disabled");
//     prevBtn.classList.remove("active");
    
//     let counter = 0;
//     let imageWidth = carouselImages[0].clientWidth;
    
//     // events for buttons
//     nextBtn.addEventListener('click', () => {
//             carouselSlide.style.transition = 'transform 0.4s ease-in-out';
//             counter++;
//             carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
//             checkButtons();
//     });

//     prevBtn.addEventListener('click', () => {
//             carouselSlide.style.transition = 'transform 0.4s ease-in-out';
//             counter--;
//             carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
//             checkButtons();
//     });
    


//     function checkButtons(){
//         if (counter == 0) {
//             prevBtn.setAttribute("disabled", "disabled");
//             prevBtn.classList.remove("active");
    
//         } else if(counter == carouselImages.length - 1){
//             nextBtn.setAttribute("disabled", "disabled");
//             nextBtn.classList.remove("active");
    
//         } else {
//             prevBtn.removeAttribute("disabled");
//             nextBtn.removeAttribute("disabled");
//             prevBtn.classList.add("active");
//             nextBtn.classList.add("active");
    
//         }   
//     }
//     // ФУНКЦИЯ СОЗДАНИЯ СЛАЙДЕРА
//     let createSlider = function(classTest,img1, img2, color) {
//         let sliderDiv = document.createElement("div");
//         let carouselContainer = document.createElement("div");
//         let carouselSlide = document.createElement("div");
//         let image1 = document.createElement("img");
//         let image2 = document.createElement("img");

//         carouselContainer.className = "carousel-container";
//         carouselSlide.className = "carousel-slide";
//         image1.setAttribute("src", img1);
//         image2.setAttribute("src", img2);

//         sliderDiv.className = classTest;

//         sliders.appendChild(sliderDiv);
//         sliderDiv.appendChild(carouselContainer);
//         carouselContainer.appendChild(carouselSlide);
//         carouselSlide.appendChild(image1);
//         carouselSlide.appendChild(image2);

//         createButtons(sliderDiv,color);
//         return sliderDiv;
//     }
//     // ФУНКЦИЯ СОЗДАНИЯ КНОПОК ДЛЯ СЛАЙДЕРА
//     function createButtons(sliderDiv,color) {
//         let prevBtn = document.createElement("button");
//         let nextBtn = document.createElement("button");
//         let buttons = document.createElement("div");
//         let prevSpan = document.createElement("span");
//         let nextSpan = document.createElement("span");
    
//         buttons.className = "buttons";
//         nextBtn.className = "next button active";
//         prevBtn.className = "prev button active";

//         prevSpan.innerText = "Prev";
//         nextSpan.innerText = "Next";

//         prevBtn.setAttribute("disabled", "disabled");
//         prevBtn.classList.remove("active");

//         nextBtn.appendChild(nextSpan);
//         prevBtn.appendChild(prevSpan);
//         buttons.appendChild(prevBtn);
//         buttons.appendChild(nextBtn);
//         sliderDiv.appendChild(buttons);

//         nextBtn.style.backgroundColor = color;
//         prevBtn.style.backgroundColor = nextBtn.style.backgroundColor;
//     }
//     return {
//         createSlider : createSlider
//     } 
//     // let btnProperty = function(color = "white",radius) {
//     //     nextBtn.style.backgroundColor = color;
//     //     prevBtn.style.backgroundColor = nextBtn.style.backgroundColor;
//     //     if(radius) {
//     //         nextBtn.style.borderRadius = '10px';
//     //         prevBtn.style.borderRadius = nextBtn.style.borderRadius;
//     //     } else {
//     //         nextBtn.style.borderRadius = '0px';
//     //         prevBtn.style.borderRadius = nextBtn.style.borderRadius;
//     //     }
//     //     return nextBtn;
            
//     // }
//     // return {
//     //     btnProperty: btnProperty
//         // heightSlider : heightSlider,
//         // colorBtn : colorBtn,
//         // images : images
// })();
// slider.createSlider("yarik","images/cat3.jpg","images/cat2.jpg","red");



// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//     button.adddEventListener("click", () => {
//         const offset = button.dataset.carouselButton ==="next" ? 1 : -1
//         const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.chilren].indexOf(activeSlide) + offset
//         if (newIndex < 0) newIndex = slides.children.length - 1
//         if (newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active 
//     })
// })

const text = document.querySelector('.headings');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
    
}

const slides=document.querySelectorAll(".slide");
var counter=0;

slides.forEach(
    (slide, index)=>{
        slide.style.left= `${index*100}%`
    }
)

// const goPrev = () =>{
//     counter--;
//     slideImage();
    
// }

// const goNext = () =>{
//     counter++;
//     slideImage();
    
// }
const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    );
}

setInterval(slideImage, 3000)



// const images = document.querySelectorAll('.slide');
// let currentIndex = 0;

// function slideImages() {
//     currentIndex = (currentIndex + 1) % images.length;
//     images.forEach((image, index) => {
//         image.style.transform = `translateX(-${currentIndex * 100}%)`;
//     });
// }

// setInterval(slideImages, 1000); // Change slide every 3 second
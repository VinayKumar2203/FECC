let pause = document.getElementById('pause');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let image = document.getElementById('images');
let play = document.getElementById('start');

let imageArray = [
    {
        url: "https://www.bing.com/th?id=OIP.GPFEY6kfgxbsja6gmrW6rwAAAA&w=136&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        alt: "A beautiful sunrise over the mountains",
        description: "Sunrise view from the top of the mountain"
    },
    {
        url: "https://www.bing.com/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&w=161&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        alt: "A city skyline at night",
        description: "Night view of the city skyline with buildings lit up"
    },
    {
        url: "https://www.bing.com/th?id=OIP.U_VJuupQohwnzXcKMztqWgHaEo&w=144&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        alt: "A close-up of a flower in a garden",
        description: "A detailed shot of a flower with dew drops"
    },
    {
        url: "https://www.bing.com/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&w=226&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        alt: "A dog playing in the park",
        description: "A happy dog running on green grass"
    },
    {
        url: "https://www.bing.com/th?id=OIP.jrfEutqZDB8WmWtSEDWabwHaEp&w=160&h=103&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        alt: "A plate of delicious pasta",
        description: "Pasta served with a rich tomato sauce and basil"
    },
    {
        url: "https://www.bing.com/th?id=OIP.wZ9TIXABLaRIq6TLMm3rSwHaHa&w=100&h=103&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",

        alt: "A beach with clear blue water",
        description: "Sunny day at the beach with calm waves"
    }
];

let currentImageIndex = 0;
let sliderShow;

// console.log(imageArray)
function updateImage() {
    image.setAttribute("src", imageArray[currentImageIndex].url);
    image.setAttribute("alt", imageArray[currentImageIndex].alt);
}
updateImage()

play.addEventListener('click', () => {
    if (!sliderShow) {
        sliderShow = setInterval(() => {
         if (currentImageIndex < imageArray.length-1) {
            currentImageIndex++;
         }else{
            currentImageIndex=0;
         }
         updateImage()
        }, 3000)
    }
});
pause.addEventListener('click', () => {
    clearInterval(sliderShow)
    sliderShow = null;
});

next.addEventListener('click', () => {
    clearInterval(sliderShow); 
    sliderShow = null; 
    
    if (currentImageIndex < imageArray.length - 1) {
        currentImageIndex++; 
    } else {
        currentImageIndex = 0; 
    }

    updateImage();
});


previous.addEventListener('click', () => {
    clearInterval(sliderShow);
    sliderShow = null; 
    if (currentImageIndex > 0) {
        currentImageIndex--; 
    } else {
        currentImageIndex = imageArray.length - 1;  
    }

    updateImage();
});

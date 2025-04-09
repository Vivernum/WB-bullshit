let array = [
    {picture: "./images/results/results.png"},
    {picture: "./images/results/results-2.png"},
    {picture: "./images/results/results-3.png"}
];

let i = 0;

let image = document.querySelector(".about__results__main-section__image");
let arrow_back = document.querySelector(".about__results__main-section__back") ;
let arrow_forward = document.querySelector(".about__results__main-section__forward");

arrow_back.addEventListener('click', function () {
    if (image.src == array[0].picture) {
        arrow_back.style.cursor = 'default';
    } else {
        smoothly(image, 'src', array[i - 1].picture);
        arrow_back.style.cursor = 'pointer';
        i--;
    }
});

arrow_forward.addEventListener('click', function() {
    if (image.src == array[array.length - 1].picture) {
        arrow_forward.style.cursor = 'default';
    } else {
        smoothly(image, 'src', array[i + 1].picture);
        arrow_forward.style.cursor = 'pointer';
        i++;
    }
}); 
const $current = document.querySelector('#current');
const $imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// Set first image opacity
$imgs[0].style.opacity = opacity;

$imgs.forEach(img => 
    img.addEventListener('click', imgClick)
);

function imgClick(e) {
    // Reset the opacity
    $imgs.forEach(img => img.style.opacity = 1)

    // Change current img to src of clicked image
    $current.src = e.target.src;

    // Add fade in class
    $current.classList.add('fade_in');

    // Remove fade in class after 0.5s
    setTimeout(() => $current.classList.remove('fade_in'), 500);

    // Change the opacity 
    e.target.style.opacity = opacity;
}
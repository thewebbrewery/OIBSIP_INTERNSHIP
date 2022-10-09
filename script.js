const slides = document.querySelectorAll('.slide');  //add all iphone img elements in DOM
const dots = document.querySelectorAll('.dot');    //add all dots or indicators in DOM


// fuction for adding/removing classes
function updateClass(i) {

    // 👇🏻 For add/remove class in iphone image

    for (slide of slides) {
        slide.classList.remove('active');
        slides[i].classList.add('active');
    }

    // 👇🏻 For add/remove class in dot indicators

    for (dot of dots) {
        dot.classList.remove('active');
        dots[i].classList.add('active');
    }
}

// function call under loop condition : click

for (let j = 0; j < dots.length; j++) {
    dots[j].addEventListener('click', () => {
        updateClass(j);
    })
}


// 👇🏻 Mobile View Image slider 👇🏻


let changeImg = 1

setInterval(() => {
    document.querySelector('.img.first').classList.remove('first')
    const img = document.querySelector(`.img-${changeImg}`)
    img.classList.add('first')
    changeImg++

    if (changeImg > 5) {
        changeImg = 1
    }

}, 2500)

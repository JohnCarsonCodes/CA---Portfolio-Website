function changeH1To () {
    let element;

    if (document.getElementById('hero-title')) {
        element = document.getElementById('hero-title')
    } else {
        element = document.getElementById('hero-title-changed');
    }

    element.style.color = 'rgb(90, 90, 90)';
    element.style.marginBottom = '10px';
}

function changeH1From () {
    let element;

    if (document.getElementById('hero-title')) {
        element = document.getElementById('hero-title')
    } else {
        element = document.getElementById('hero-title-changed');
    }

    element.style.color = '';
    element.style.marginBottom = '';
}

function changeH1Text () {
    let element;

    if (document.getElementById('hero-title')) {
        element = document.getElementById('hero-title');
        element.innerHTML = 'Hey, Change Me Back!';
        element.id = 'hero-title-changed';
    } else {
        element = document.getElementById('hero-title-changed');
        element.innerHTML = 'Welcome BACK To My Digital World!';
        element.id = 'hero-title';
    }
}

function changeH1TextFrom () {
    let element = document.getElementById('hero-title');
    element.innerHTML = 'Welcome To My Digital World!';
    document.getElementById('hero-wrapper').class = '';
}

function openImage(image) {
    console.log('we made it');
    console.log(image);

    let overlay = document.getElementById('full-page-container');
    let srcImg = document.getElementById('full-page-image');
    overlay.style.visibility = 'visible';
    srcImg.src = image;
}

function closeImage() {
    let overlay = document.getElementById('full-page-container');
    overlay.style.visibility = 'hidden';
}


document.getElementById('hero-wrapper').addEventListener('mouseover', changeH1To);
document.getElementById('hero-wrapper').addEventListener('mouseout', changeH1From);
document.getElementById('hero-wrapper').addEventListener('click', changeH1Text);
document.getElementById('full-page-container').addEventListener('click', closeImage);
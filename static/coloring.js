function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeBackground() {
    let element = document.getElementsByClassName('card');
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('mouseover', function () {
                this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            }
        )
        element[i].addEventListener('mouseout', function () {
                this.style.backgroundColor = 'white';
            }
        )
    }

}

changeBackground();

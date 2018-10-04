function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeCardBackground() {
    let element = document.getElementsByClassName('card');
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('mouseover', function () {
                let r = getRandomInt(0, 255);
                let g = getRandomInt(0, 255);
                let b = getRandomInt(0, 255);
                this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            }
        );
    }

}

function changeBackground() {
    let element = document.getElementById('body');
    element.addEventListener('click', function () {
        let number = getRandomInt(1, 7);
            this.style.backgroundImage = 'url(../static/image/background' + number + '.jpg)';
        }
    );
}

changeCardBackground();
changeBackground();

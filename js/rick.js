/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var alive = true;

var hp = 10;

var happy = 10;

var floor = 0;

var hpBar;

var happyBar;

var petBtn = document.getElementById("pet");

var feedBtn = document.getElementById("feed");


function decreaseHP() {

    var decreaseBy = [1, 1, 1, 2, 2, 3, 4, 5, 6];

    var randomNumber = Math.random() * decreaseBy.length;

    var decreaseAmount = Math.floor(randomNumber);

    if (alive === true && hp >= floor) {
        hp -= decreaseAmount;

        if (hp == floor) {
            alive = false;
        }
    }

    hpBar = ['Leven: ' + hp];
    var hpText = document.getElementById('life');
    hpText.textContent = hpBar;

    switch (hp) {

        case 6:
            document.querySelector('img').src = "images/kindasad.jpg";
            break;

        case 5:
            document.querySelector('img').src = "images/kindasad.jpg";
            break;

        case 4:
            document.querySelector('img').src = "images/reallysad.jpg";
            break;

        case 3:
            document.querySelector('img').src = "images/reallysad.jpg";
            break;

        case 2:
            document.querySelector('img').src = "images/reallysad.jpg";
            break;

        case 1:
            document.querySelector('img').src = "images/reallysad.jpg";
            break;

    }

    if (alive === false){
        document.querySelector('img').src = "images/rip.jpg";
    }


}

function decreaseHappy() {

    var decreaseBy = [1, 1, 1, 2, 2, 3, 4, 5, 6];

    var randomNumber = Math.random() * decreaseBy.length;

    var decreaseAmount = Math.floor(randomNumber);

    if (happy > floor) {
        happy -= decreaseAmount;

        if (happy <= floor) {
            alive = false;
        }
    }

    happyBar = ['Blijdschap: ' + happy];
    var happyText = document.getElementById('happy');
    happyText.textContent = happyBar;

    switch (happy) {

        case 6:
            document.querySelector('img').src = "images/kindasad.jpg";
            break;

        case 5:
            document.querySelector('img').src = "images/kindasad.jpg";
            break;

        case 4:
            document.querySelector('img').src = "images/reallysad.jpg";
            break;

        case 3:
            document.querySelector('img').src = "images/reallysad.jpg";
            break;

        case 2:
            document.querySelector('img').src = "images/reallysad.jpg";
            break;

        case 1:
            document.querySelector('img').src = "images/reallysad.jpg";
            break;

    }

    if (alive === false){
        document.querySelector('img').src = "images/rip.jpg";
    }
}



function pet() {

    var increaseBy = [1, 1, 1, 2, 2, 3, 4, 5, 6];

    var randomNumber = Math.random() * increaseBy.length;

    var increaseAmount = Math.floor(randomNumber);

    var happyIncreaseAmount = happy += increaseAmount;

    happyBar = ['Leven: ' + happyIncreaseAmount];
    var happyText = document.getElementById('happy');
    happyText.textContent = happyBar;


}


function feed() {

    var increaseBy = [1, 1, 1, 2, 2, 3, 4, 5, 6];

    var randomNumber = Math.random() * increaseBy.length;

    var increaseAmount = Math.floor(randomNumber);

    var hpIncreaseAmount = hp += increaseAmount;

    hpBar = ['Leven: ' + hpIncreaseAmount];
    var hpText = document.getElementById('life');
    hpText.textContent = hpBar;

}

petBtn.addEventListener('click', pet);


feedBtn.addEventListener('click', feed);

setInterval(decreaseHP, 10000);
setInterval(decreaseHappy, 10000);

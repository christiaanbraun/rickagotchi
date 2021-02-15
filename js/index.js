/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var alive = true;

var hp = 100;

var happiness = 100;

var floor = 0;

var happyBar = document.getElementById('happybar');

var hpBar = document.getElementById('hpbar');

var petBtn = document.getElementById('petbtn');

var feedBtn = document.getElementById('feedbtn');

var body = document.querySelector('body');

var text = document.querySelector('div');

var audio = document.querySelector('audio');

var owned = document.getElementById('owned');

var rickimg = document.getElementById('click');

var ownedTexts = ["You got Rick Rolled, dummy", "Really? You fell for this?", "Got you!!!!", "Did you not see that coming??"];

var randomText = Math.random() * ownedTexts.length;

var randomSelect = Math.floor(randomText);

console.log(rickimg);

 if (alive === false){
        owned.textContent = ownedTexts[randomSelect];
}


function decreaseHP() {

    var random = Math.random() * (15 - 1) + 1;

    var decreaseAmount = Math.round(random);

    if (alive === true && hp >= floor) {
        hp -= decreaseAmount;
    }

    hpBar.textContent = "Health Points: " + hp;

    if (hp <= floor) {
        alive = false;
        hpBar.textContent = "Health Points: 0";
    }



}

function decreaseHappy() {

    var random = Math.random() * (15 - 1) + 1;

    var decreaseAmount = Math.round(random);

    if (alive === true && happiness >= floor) {
        happiness -= decreaseAmount;
    }


    happyBar.textContent = "Happiness: " + happiness;


    if (happiness <= floor) {
        alive = false;
        happyBar.textContent = "Happiness: 0";
    }


}

function changeRick(stat) {

    if (stat <= 10) {
        document.querySelector('img').src = "images/rick10.jpg";
    } else if (stat <= 20) {
        document.querySelector('img').src = "images/rick9.jpg";
    } else if (stat <= 30) {
        document.querySelector('img').src = "images/rick8.jpg";
    } else if (stat <= 40) {
        document.querySelector('img').src = "images/rick7.jpg";
    } else if (stat <= 50) {
        document.querySelector('img').src = "images/rick6.jpg";
    } else if (stat <= 60) {
        document.querySelector('img').src = "images/rick5.jpg";
    } else if (stat <= 70) {
        document.querySelector('img').src = "images/rick4.jpg";
    } else if (stat <= 80) {
        document.querySelector('img').src = "images/rick3.jpg";
    } else if (stat <= 90) {
        document.querySelector('img').src = "images/rick2.jpg";
    } else if (stat <= 100) {
        document.querySelector('img').src = "images/rick1.jpg";
    }
}

function increaseHP() {

    var randomNumber = Math.random() * (15 - 1) + 1;

    var randomNumber2 = Math.random() * (5 - 1) + 1;

    var increaseAmount2 = Math.round(randomNumber2);

    var increaseAmount = Math.round(randomNumber);

    var hpIncreaseAmount = hp += increaseAmount;

    var happinessIncreaseAmount = happiness + increaseAmount2;

    happyBar.textContent = 'Happiness: ' + happinessIncreaseAmount;

    hpBar.textContent = 'Health Points: ' + hpIncreaseAmount;


}

function increaseHappiness() {

    var randomNumber = Math.random() * (15 - 1) + 1;

    var increaseAmount = Math.round(randomNumber);

    var happyIncreaseAmount = happiness += increaseAmount;

    happyBar.textContent = 'Happiness: ' + happyIncreaseAmount;

    console.log(increaseAmount);


}

function rickRoll() {

    if (alive === false) {
        body.classList.add('fullrickroll');
        text.classList.add('justroll');
        owned.classList.add('rickrolled');
        owned.classList.remove('notrickrolled');
        audio.play();
        owned.textContent = ownedTexts[randomSelect];
        alive = false;

    } else if (happiness <= 30) {
        body.classList.add('fullrickroll');
        text.classList.add('justroll');
        audio.play();
    }
}

function killRick(){
    alive = false;
}

setInterval(decreaseHP, 2000);
setInterval(decreaseHappy, 2000);
setInterval(rickRoll, 20);


setInterval(function () {
    changeRick(hp);
}, 2000);

setInterval(function () {
    changeRick(happiness);
}, 2000);

rickimg.addEventListener('mouseover', killRick);

feedBtn.addEventListener('click', increaseHP);

petBtn.addEventListener('click', increaseHappiness);

var h1 = document.querySelector("h1")
var counter = 0;

function plusbutton() {
    counter += +1;
    h1.innerHTML = counter;
}

function minusbutton() {
    counter = counter - 1;

    if (counter <= 0) {
        counter = 0;
    }

    h1.innerHTML = counter;

}
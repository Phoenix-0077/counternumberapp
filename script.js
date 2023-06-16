var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');
var reset = document.getElementById('reset');
var number = document.querySelector('p');





reset.addEventListener('click', resetNumber);

function resetNumber(){
    number.textContent = '0';
}


increase.addEventListener('click', increaseNumber);

function increaseNumber(){
    number.textContent++;
}


decrease.addEventListener('click', decreaseNumber);

function decreaseNumber(){
    number.textContent--;
}
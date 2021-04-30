//declare new variable input that gets element by id input 
const input = document.getElementById('input');

//add 'click' event listener to input variable
input.addEventListener('click',clickAlert);

//create callback function 
function clickAlert() {
    alert('I was clicked');
}

function addingEventListener() {
    input.addEventListener('click',clickAlert);
}

addingEventListener();
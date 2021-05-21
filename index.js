//declare new variable input that gets element by id input 
const input = document.getElementById('input');

//add 'click' event listener to input variable
function clickAlert() {
    input.addEventListener('click', () => alert('I was clicked'))
}

function addingEventListener() {
    clickAlert();
}

addingEventListener();




//add a new header with directions for what to do

const newHeader = document.createElement('h1')
newHeader.setAttribute('id','direction header')
newHeader.textContent = 'Click on #5 for a neat response'

document.querySelector('main').append(newHeader)



//need to use an input tag to make it clickable? important note that you can create self-closing elements. 
//not sure a div tag can do that which is why it's not working. 


//create input element
const input2 = document.createElement('input')
input2.setAttribute('id','input2')
input2.textContent = 'Here! Here! Click here!'

document.querySelector('div div div div div').append(input2) //wonder why I can't append to the div5 variable? 



//practice adding an event listener to nested <div>5</div> 
const div5 = document.querySelector('div div div div div')

const div5Event = div5.addEventListener('click', () => alert('Thanks for clicking me'))

div5event();
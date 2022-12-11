// grab DOM elements
const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const button = document.getElementById('update-button');
const nameTag = document.getElementById('nametag');
const colorButton = document.getElementById('color-button');
const colorInput = document.getElementById('color-input');

// set event listeners
button.addEventListener('click', ()=>{
    console.log(nameDisplay);
    nameDisplay.textContent = nameInput.value;
    /*nameDisplay.style.color = 'pink';
    nameTag.style.backgroundColor = 'plum';*/
});

colorButton.addEventListener('click', ()=>{
    nameTag.style.backgroundColor = colorInput.value;
});


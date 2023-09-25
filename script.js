



//functions for each button

//input to change grid size (square or input choice?)s
function changeGridSize(){

};
//change colour fo sketch
function changeColour(){

};
//clear grid to blank canvas
function resetGrid(){

};
//draw on hover
function draw(){

};

//grid manipulation
gridContainer.addEventListener('hover', () => {
    draw();
});

//buttons to run functions
sizeBtn.addEventListener('click', () => {
    changeGridSize();
});
colourBtn.addEventListener('click', () => {
    changeColour();
});
resetBtn,addEventListener('click', () => {
    resetGrid();
});



//need to set up default grid on load 16x16
const defaultGrid = document.querySelector('#gridcontainer');

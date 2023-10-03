// grid container needs to be a set height and width
// the pixels in etch can be a percentage of this worked
// out by the gridsize 
// so pixelsize = height/(gridsize+border) 


let gridSize = 4;
let colorConst = "white"; 
//set the number that can be used as an RGB or HEX value

//functions for each button

//input to change grid size (square or input choice?)s
function changeGridSize(){
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let makeDiv = document.createElement('div');
        makeDiv.className = 'gridDiv';
        document.getElementById("gridContainer").appendChild(makeDiv);
    };
};

//change colour fo sketch
function changeColour(){
    //chane color of colorconst
};
//clear grid to blank canvas
function resetGrid(){
    //set colorconst to white
    // change all divs to colorconst
};
//draw on hover
function draw(){
    document.getElementsByClassName("gridDiv").style.backgroundColor = colorConst;
};
    //set colorconst to black
    //set background color of griddiv on hover 


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
const newGrid = document.querySelector('#gridContainer');
changeGridSize(newGrid);

//grid manipulation
gridDiv.addEventListener('mouseover', () => {
    draw();
});


// working functions for changing background by id , need it to work for classes
// function draw(){
//     document.getElementById("gridContainer").style.backgroundColor = colorConst;
// };
//
// gridContainer.addEventListener('mouseover', () => {
//     draw();
// });
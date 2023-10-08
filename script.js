
let gridSize = 16;
let sketchColour = "rgb(255, 0 ,0)";
//set the number that can be used as an RGB value

function makeSketchpad(gridSize){
    let sketchpad = document.querySelector('#sketchpad');
    let cells = document.querySelectorAll('.gridDiv');
    cells.forEach((div) => div.remove());
    sketchpad.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for(let i = 0; i<(gridSize * gridSize); i++){
        let cell = document.createElement("div");
        cell.className = 'gridDiv';
        cell.addEventListener("mouseover", draw);
        cell.style.backgroundColor = "rgb(222, 222, 222)";
        sketchpad.insertAdjacentElement("beforeend", cell);
    };
};

function changeSize(input) {
    if ((input >=1) && (input <= 100)) { 
        makeSketchpad(input);
    } else { 
        alert("Please select a value between 1 and 100");
    }
};
//alert not working

function draw(){
    this.style.backgroundColor = sketchColour;
}

makeSketchpad(16);




// //change colour fo sketch
// function changeColour(){
//     //chane color of colorconst
// };
// //clear grid to blank canvas
// function resetGrid(){
//     //set colorconst to white
//     // change all divs to colorconst
// };

// //buttons to run functions
// sizeBtn.addEventListener('click', () => {
//     changeGridSize();
// });
// colourBtn.addEventListener('click', () => {
//     changeColour();
// });
// resetBtn,addEventListener('click', () => {
//     resetGrid();
// });


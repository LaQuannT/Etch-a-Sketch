// Have script wait to run until page is loaded
document.addEventListener('DOMContentLoaded',function() {

    //default gride size
    createGrid(16);

   // Call button node and add event listeners
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        clearGrid();

    // Prompt user for input for size of grid
   playersChoice = parseInt(prompt("Pick size of grid 1 - 100"));

   // Check that input is valid
   if (playersChoice > 100 || playersChoice < 0) {
    alert("Please select again");
   } else {
    createGrid(playersChoice);
    draw();
   }
    
});


});

function createGrid(size){
     // Get node from DOM
     let container = document.querySelector('.container');

     // Create a 16x16 grid - css grid template
     container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
     container.style.gridTemplateRows =`repeat(${size}, 1fr)`;
 
     //create divs for grid
     let numDivs = size * size;
     for (let i = 0; i < numDivs; i++) {
         let div = document.createElement('div');
         div.classList.add('grid-item');
         container.appendChild(div);
     }
}

function draw() {
 //create hover effect changing background color
 const boxes = document.querySelectorAll('.grid-item');
 for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = 'yellow';
        });
    }
}

// Set grid background color to default color
function clearGrid() {
    let boxes = document.querySelectorAll('.grid-item');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'lightgray';
    });
}
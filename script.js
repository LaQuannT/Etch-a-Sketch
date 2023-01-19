// Have script wait to run until page is loaded
document.addEventListener('DOMContentLoaded',function() {

    // Get node from DOM
    let container = document.querySelector('.container');

    // Create a 16x16 grid - css grid template
    container.style.gridTemplateColumns = 'repeat(16, 1fr)';
    container.style.gridTemplateRows ='repeat(16, 1fr)';

    //create divs for grid
    let numDivs = 16 * 16;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }

    //create hover effect changing background color
    const boxes = document.querySelectorAll('.grid-item');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = 'yellow';
        });
    }
});
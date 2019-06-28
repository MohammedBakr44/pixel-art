// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const gridDimentions = 20;
/*
 * @param element to be selected
 * TODO: return the selected element to use it(just like in JQuery)
 */
function $(element) {
    let el = document.querySelector(element);
    return el;
}

/*
 * @param el: element to be clicked
 * @param color: colorPicker which have the color value
 * result: color the clicked element(pixel)
 * result: Remove the colored pixel if it's clicked(undo)
 */
function colorPixels(el, color) {
    for (let i = 0; i < el.length; i++) {
        el[i].onclick = function() {
            if (this.classList.contains('colored')) {
                this.style.backgroundColor = 'transparent';
                this.classList.remove('colored');
            } else {
                this.style.backgroundColor = color;
                this.classList.add('colored');
            }
        };
    }
}



function makeGrid() {
    // Reset Grid
    $('#pixelCanvas').innerHTML = '';

    // Take inputs values
    let height = $('#inputHeight').value;
    let width = $('#inputWidth').value;

    // Grid element
    function createGridItem() {
        const gElement = document.createElement('div');
        gElement.classList.add('grid-item');
        gElement.style.width = `${gridDimentions}px`;
        gElement.style.height = `${gridDimentions}px`;
        gElement.style.flex = 100 / width + '%';
        return gElement;
    }

    // Canvas
    $('#pixelCanvas').style.width = width * gridDimentions + 'px';
    $('#pixelCanvas').style.height = height * gridDimentions + 'px';

    for (let i = 0; i < width * height; i++) {
        $('#pixelCanvas').appendChild(createGridItem());
    }

    colorPixels(
        document.querySelectorAll('.grid-item'),
        $('#colorPicker').value
    );
}

$('#sb').onclick = function() {
    makeGrid();
};

$('#colorPicker').onchange = function() {
    colorPixels(
        document.querySelectorAll('.grid-item'),
        $('#colorPicker').value
    );
};

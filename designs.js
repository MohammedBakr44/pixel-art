// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function $(element) {
    let el = document.querySelector(element);
    return el;
}


function makeGrid() {

    $('#sb').onclick = function () {
        console.log('hello')

        let height = $('#inputHeight').value;
        let width = $('#inputWidth').value;

        let gridW = '';
        for (let i = 0; i < width; i++) {
            gridW += '<div class="grid-item"></div>';
        }
        let gridH = '';
        for (let i = 0; i < height; i++) {
            gridH += gridW
        }
        $('#pixelCanvas').innerHTML = gridH
        $('#pixelCanvas').style.width = width * height + 'px'
        const c = document.querySelectorAll('.grid-item');
        const color = $('#colorPicker').value;
        console.log(color);
        for (var i = 0; i < c.length; i++) {
            c[i].style.width = 100 / width + '%';
            c[i].style.flex = 100 / width + '%';
        }

        for (let i = 0; i < document.querySelectorAll('.grid-item').length; i++) {
            document.querySelectorAll('.grid-item')[i].onclick = function () {
                this.style.backgroundColor = color;
            }
        }

    }

}

makeGrid();

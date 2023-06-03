var matrix = [
    [5, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 5, 0, 0, 0, 1, 0, 5],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 5, 1, 2, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 3, 0, 0, 1, 3, 0, 4, 0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 2, 2, 5, 1, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 1, 0, 5, 0, 0, 1, 0, 0, 0, 3, 1, 0, 0],
    [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 3, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 0, 0, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0]
];

var side = 50;
var grassArr = [];
var grassEaterArr = []
var gishatichArr = []
var grassEaterOgnoxArr = []
var kaycakArr = []
function setup() {
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y, 3);
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 4) {
                var grassEaterOgnox = new GrassEaterOgnox(x, y, 4);
                grassEaterOgnoxArr.push(grassEaterOgnox);
            }
            else if (matrix[y][x] == 5) {
                var kaycak = new Kaycak(x, y, 5);
                kaycakArr.push(kaycak);


            }
        }
    }
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(0, 204, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(255, 204, 153);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill(255, 255, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(204, 0, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill('d4e4bc');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill(192,192,192);
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mult();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
        grassEaterArr[i].move()
        grassEaterArr[i].mult()
        grassEaterArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in grassEaterOgnoxArr) {
        grassEaterOgnoxArr[i].eat()
        grassEaterOgnoxArr[i].move()
        grassEaterOgnoxArr[i].die()
    }
    for (var i in kaycakArr) {
        kaycakArr[i].eat()
        kaycakArr[i].move()
        
       
    }
}

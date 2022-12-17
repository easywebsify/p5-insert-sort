let values = [];
let i = 0;
let j = 0;
function setup() {
  createCanvas(windowWidth - 30, windowHeight - 30);
  for (let i = 0; i < width / 8; i++) {
    values.push(random(height));
  }
  frameRate(30);
}
function draw() {
  background("#fff");
  simulateSorting();
  insertSort();
}
function simulateSorting() {
  for (let i = 0; i < values.length; i++) {
    stroke(255, 255, 255);
    fill("#ff914d");
    rect(i * 8, height, 8, -values[i], 20);
  }
}
function insertSort() {
  if (i < values.length) {
    let currentValue = values[j];
    let l;
    for (l = j - 1; l >= 0 && values[l] > currentValue; l--) {
      values[l + 1] = values[l];
    }
    values[l + 1] = currentValue;
    j++;
  } else {
    noLoop();
  }
}

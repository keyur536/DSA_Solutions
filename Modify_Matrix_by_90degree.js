// Create a 3x3 matrix
let rows = 3;
let cols = 4;
let matrix = [];

console.log(printNo);
console.log(matrix.length);

// Fill the matrix with initial values
for (let i = 0; i < rows; i++) {
  let row = [];
  for (let j = 0; j < cols; j++) {
    row.push(i * cols + j + 1); // Example values: 1, 2, 3, ...
  }
  matrix.push(row);
}

// Print the initial matrix  matrix.length modMatrix.length
console.log("Initial Matrix:");
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" "));
}

let modMatrix = [];

for (let i = 0; i < cols; i++) {
  let row = [];
  for (let j = 0; j < rows; j++) {
    row.splice(0, 0, matrix[j][i]);
  }
  modMatrix.push(row);
}

// Print the modified matrix  matrix.length

console.log("Modified Matrix:");
for (let i = 0; i < modMatrix.length; i++) {
  console.log(modMatrix[i].join(" "));
}
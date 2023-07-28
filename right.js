//pattern fore a square
let i, j, k, n = 5;
for (i = 0; i < n; i++) {
  let pattern = "";

  for (j = 0; j < n; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

console.log();

//pattern for a reverse right triangle
for (i = 0; i < n; i++) {
  let pattern = "";

  for (j = 0; j < n - i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

console.log();


//pattern for a reverse pyramid
for (i=0; i<n; i++) {
  let pattern = "";

  for(k=0; k<i; k++){
    pattern +=" ";
    }

  for(j=0; j<n-i; j++){
  pattern +="* ";
  }

console.log(pattern);
}

console.log();

//pattern for a pyramid
for (let i=0; i<n; i++) {
  let pattern = "";

  for (let k=i; k<n-1; k++) {
    pattern += " ";
  }

  for (let j=0; j<=i; j++) {
    pattern += "* ";
  }

  console.log(pattern);
}

//pattern for a diamond
for (let i = n - 2; i >= 0; i--) {
  let pattern = "";

  for (let k = i; k < n - 1; k++) {
    pattern += " ";
  }

  for (let j = 0; j <= i; j++) {
    pattern += "* ";
  }

  console.log(pattern);
}


console.log();


// Right triangle pattern
for (let i = 0; i < n; i++) {
  let pattern = "";

  for (let j = 0; j <= i; j++) {
    pattern += "* ";
  }

  console.log(pattern);
}








  
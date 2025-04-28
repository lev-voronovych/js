
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}


for (let j = 2; j <= 20; j++) {
  if (j % 2 === 0) {
    continue;
  }
  console.log(j);
}



for (let k = 1; k <= 10; k++) {
  console.log(`7 x ${k} = ${7 * k}`);
}

let n = 15; 
for (let m = 0; ; m++) {
  if (m >= n) {
    break;
  }
  console.log(m);
}


let p = 1;
while (p <= 20) {
  if (p % 3 === 0) {
    p++;
    continue;
  }
  console.log(p);
  p++;
}

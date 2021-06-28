// 1 x 9 = 9 
// 2 x 9 = 18 
// 3 x 9 = 27 
// etc...

const multGetal = 9

for (let i = 0; i <= 10; i++) {
    const nummerUitkomst = multGetal * i
    console.log(multGetal + " * " + i + " = " + nummerUitkomst);
}

// BONUS USE nested for loop
// 1 x 1 = 1 
// 1 x 2 = 2 
// 1 x 3 = 3 
// etc...

// ...
// 9 x 1 = 9 
// 9 x 2 = 18 
// 9 x 3 = 27
// ...etc 
for (let multiplier = 0; multiplier <= 10; multiplier++) {
    for (let i = 0; i <= 10; i++) {
        let result = multiplier * i;
        console.log(multiplier + " * " + i + " = " + result);
    }
}
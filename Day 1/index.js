//Task #1 Calculate BMI

function calculateBMI(weight, height) {
    var BMI = weight / (height * height);
    console.log(BMI);
    return BMI;
}

calculateBMI(70, 1.75);


//Task #2 Swap Two Numbers

let a = 10;
let b = 20;
console.log("Before Swapping: x = " + a + " y = " + b);

function swap(a, b) {
    a = a ^ b; //Performing XOR operation...
    b = a ^ b;
    a = a ^ b;
    console.log(a);
    console.log(b);
    console.log("After Swapping: x = " + a + " y = " + b);
    return a, b;
}

swap(a, b);


//Task#3 Calculate Factorial

function fact(num) {
    let x = 1;
    for (i = 1; i <= num; i++) {
        x *= i;
    }
    console.log("The factorial of " + num + " is " + x);

}

fact(5);
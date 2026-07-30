// console.log("Hello JS Practice");

// variable aik container ha jis me data store hoti ha 
// let var and const 
// _______________________________________
// let /// block scope ha
// let name = "Zaheer Ali";

// name = "ali";

// name = "Hashir";

// name = "Done ✅"

// console.log(name);
// _______________________________________
// var // var block scope
// var age = 18;

// age = "19";

// age = "21";

//  age= "Done ✅"

// console.log(age);
// const city = "Karachi";

// city = "Sukkur";

// city = "Ghotki";

//  city= "Done ✅"

// console.log(city);

// ________________________________



// let input = document.getElementById("input");
// let para = document.getElementById("para");

// function user() {

//     if (input.value.trim() === "") {
//         para.innerHTML = "Enter Your name";
//     } else {
//         para.innerHTML = "Hello " + input.value;
//     }
// }


// _________________________Practice
// let input = document.getElementById("input");
// let output = document.getElementById("output");

// function multipalication() {
//     if (input.value === "") {
//         output.innerHTML = "Please Enter Your Number ❌";
//     } else {
//         let result = Number(input.value) * 2;
//         output.innerHTML = "Anwer Done =  ✅" + result 
//     }
// }




// ----------------------------------------percentage
let english = 70;
let islamic = 10;
let computer = 90;
let coding = 60;

let totalmarks = english + islamic + computer + coding;
let Obtained = 400;
let result = totalmarks / Obtained * 100;
console.log(result + "%");


if (result >= 60) {
    console.log("A");
}else{
    console.log("fail");
}


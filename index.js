// Exo 1
// const test = 143
// const bis = 219

// console.log(test === bis);
// console.log(test !== bis);
// console.log(test > bis);
// console.log(test < bis);
// console.log(test <= bis);
// console.log(test >= bis);


// exo2

// const limit = 50
// let score = 64

// if (score >= limit) {
//     console.log("ok good");
// }

// Exo 3

// const password = "azerty"

// if (password.length > 5) {
//     console.log("password is secured");
// } else {
//     console.log("password is not secured");
// }

// exo4

// const limit = 50
// let score = 64
// const password = "azerty"

// if (password.length > 5 && (limit === 50 && score === 64)) {
//     console.log("Everything is good");
// }
// if (password.length > 5 || (limit !== 50 && score === 64)) {
//     console.log("Something is good");
// }
// if (password.length < 5 && (limit < 50 && score > 64)) {
   
// } else{
//     console.log("nothing is good");
// }

// Exo5

// const random =  Math.ceil(Math.random() *6)
// console.log(random);

// if (random === 6) {
//     console.log("J'ai gagné");
// } else {
//     console.log("so close");
// }

// exo6
// const month = "January"

// switch (month) {
//     case  "January":
//         console.log("winter");
//     break;
//     case "February":
//         console.log("winter");
//     break;
//     case "Mach":
//         console.log("winter");
//     break;
//     case 'April':
//         console.log("winter");
//         break;
//     case 'May':
//         console.log("winter");
//         break;
//     case 'June':
//         console.log("Summer");
//         break;
//     case 'Jully':
//         console.log("Summer");
//         break;
//     case 'August':
//         console.log("Summer");
//         break;
//     case 'Septembre':
//         console.log("Summer");
//         break;
//     case 'Octobre':
//         console.log("Fall");
//         break;
//     case 'Novembre':
//         console.log("Fall");
//         break;
//     case 'Décembre':
//         console.log("winter");
//         break;
//         default:
//             console.log("ok");
// }

// exo7

// const roundedNumber = 12.4
// const round =    roundedNumber - Math.floor(roundedNumber)
// if (round >= 0.5) {
//     console.log(Math.ceil(roundedNumber));
// } else {
//     console.log(Math.floor(roundedNumber));
// }


const roundedNumber = 16662.47777
const round =    roundedNumber.toString() 
const ind = round.indexOf(".")+1 
const sub = round.substring(ind, ind +1)



if (parseInt(round) >= 0.5) {
    console.log(Math.ceil(roundedNumber));
} else {
    console.log(Math.floor(roundedNumber));
}
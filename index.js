// Arrange the numbers in the form of this string from smallest to largest
// if input numStr = "321987", then the result is "12378999"
let numeric = "0123456789";
let numStr = '32199987';//12378999
let temp = [];
let result = ''

// step 1

// for (let i = 0; i < numeric.length; i++) {
//     for (let j = 0; j < numStr.length; j++) {
//         if(numeric[i] === numStr[j]){
//             result+=numeric[i];
//         }
//     }
// }
// console.log(result);

// step 2

// for(let i = 0; i<numeric.length;i++){
//     for(let j = 0;j<numStr.length;j++){
//         if(numeric[i] === numStr[j]){
//             result = result + numeric[i]
//         }
//     }
// }
// console.log(result)


// step 3

for (let i = 0; i < numStr.length; i++) {
    temp.push(+numStr[i])
}

temp = temp.sort(function (a,b){return a-b}).join()

for (let i = 0; i < temp.length; i++) {
    if(temp[i] !== ','){
        result += temp[i]
    }
}
console.log(result)
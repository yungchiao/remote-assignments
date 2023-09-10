
let data=[0];

function findMaxNumber(number){
    let maxnumber = data[0];
    for (let i=0;i<number.length;i++){
        if (number[i]>maxnumber){
            maxnumber=number[i];
        }

    }
    return maxnumber;
}

let number =[1,2,4,5];
let themaxnumber = findMaxNumber(number);
console.log(themaxnumber);

let number2 = [5,2,7,1,6];
let themaxnumber2 = findMaxNumber(number2);
console.log(themaxnumber2);

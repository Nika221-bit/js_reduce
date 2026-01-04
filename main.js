//reduce
const prices = [5,30,10,25,15,20];
const total = prices.reduce(sum);

console.log(`${total.toFixed(2)}`);


function sum(accumulator,element){
    return accumulator + element;

}

//random workout
const num = [1,2,3,4,5]
let  num1 = num.reduce(all,0)
function all(accumulator,element){
    return accumulator + element

    

}
console.log(num1)
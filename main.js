//prices by reduce
const prices = [5,30,10,25,15,20];
const total = prices.reduce(sum);

console.log(`${total.toFixed(2)}`);


function sum(accumulator,element){
    return accumulator + element;

}


//grades by reduce

const grades = [75,50,90,80,65,95]
const max = grades.reduce(getmax)
const min = grades.reduce(getmin)

function getmax(accumulator,element){
    return Math.max(accumulator,element)
}
function getmin(accumulator,element){
    return Math.min(accumulator,element)
}
console.log(max)
console.log(min)


//random workout
const num = [1,2,3,4,5]
let  num1 = num.reduce(all,0)
function all(accumulator,element){
    return accumulator + element

    

}
console.log(num1)

const num2 = [10,20,30,40,50]
let num3 = num2.reduce(all,0)
function  sum(accumulator,element){
    return accumulator + element;
}
console.log(num3)


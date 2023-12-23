const numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(consoleItem);


let sum = 0;
numbers.forEach((item)=>{
    sum +=item;
})
console.log("sum :" + sum );

function consoleItem(item , index,  numbers){
    console.log(item);
}
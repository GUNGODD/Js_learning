// 1.for each



const food = ['🍇','🍈','🍉','🍊','🍌','🍅','🥝','🍓','🍒','🍑','🍍'];

food.forEach((item)=>{
   //   console.log(item);
})


// 2. Map method

const bananas = food.map((item)=> '🍌' );
console.log(bananas);
/*
[
  '🍌', '🍌', '🍌',
  '🍌', '🍌', '🍌',
  '🍌', '🍌', '🍌',
  '🍌', '🍌'
]
*/


const duplicateFood = food.map((any) => any +any);
console.log(duplicateFood);
/*
'🍇🍇', '🍈🍈',
'🍉🍉', '🍊🍊',
'🍌🍌', '🍅🍅',
'🥝🥝', '🍓🍓',
'🍒🍒', '🍑🍑',
'🍍🍍'*/


// 3. filter 

const vegetable  = food.filter((item) => item == '❤️'); // will return nothing since 
//  does not array does not contains  ❤️

console.log(vegetable);



// 4. concate

const  arr1 =  ['🍇','🍈','🍉','🍊'];
const arr2 = ['❤️','😃','😎','😋','😊'];
console.log("First Array:");
 arr1.forEach((item) =>{
    console.log(item);
 })
console.log("Second Array:");
arr2.forEach((item) =>{
    console.log(item);
 })

 console.log("Concated Array:");
 const arr3 = arr1.concat(arr2);
 arr3.forEach((item) =>{
    console.log(item);
 })
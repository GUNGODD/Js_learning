let  elements = [2,4,6,0,3,5,7,0,3,4,0];

let temp = elements.sort((a,b)=> {return a-b});
for (let i = 0; i < temp.length; i++){
    console.log(temp[i]);
}
//  move zero to last 

let flag =0;

for (let i = 0; i < temp.length; i++){
    if ( temp[i] == 0){
        let d = temp[i];
        temp.shift();
        temp.push(d);
    }
}


console.log("after ");

for (let i = 0; i < temp.length; i++){
    console.log(temp[i]);
}



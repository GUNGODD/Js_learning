function log1 (){
    console.log("hello 1");
}
function log2 (){
    console.log("hello 2");

}
function log3 (){
    console.log("hello 3");

}
function log4 (){
    console.log("hello 4");

}


function finalLog(fn){
    const arr= [1,2,3,4];
    arr.forEach(element => {

        finalLog(log4);
        
    });
}

finalLog(log4);
 //2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique

 function sevenRandomNumbers() {
    var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 10) ;
    if(arr.indexOf(r) === -1) arr.push(r);
}node 
return arr;
}
 console.log(sevenRandomNumbers())
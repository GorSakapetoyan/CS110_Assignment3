let num = 0;
let digit;
let temp = "";
if(num === 0){
    console.log(0);
}
else{
    while(num >= 1){
        digit = num % 2;
        num   = Math.floor(num/2);
        temp  = temp + digit;
    }
    let index  = temp.length - 1;
    let result = "";
    while (index >= 0) {
        result += temp[index];
        index--;
    }
    
    console.log(result);
}

// even Number
124%2 == 0;

// odd Number
131%2 ==1;

function evenNumber (number){
    if(number % 2 ==0){
        return true;
    }
    return false;
}

var hisnumber = 613;
var ishisnumberisEven = evenNumber(hisnumber);
console.log(ishisnumberisEven);
function oneHundredToFive(){
    for(let i=100; i>=5; i--){
        console.log(i);
    }
}


function absoluteValue(number){
    if(typeof(number)==="number"){
        return Math.abs(number);
    }
    return "null";
}

function multiplesOfFourOrSeven(){
    for(let i=4 ; i<=100;i++){
        if(i%4===0 || i%7===0){
            console.log(i);
        }
    }
}


//implemented a binary search instead of using the Math.sqrt() method
function square(number){
    
    //smallest,middle,largest
    
    let smallest = 1 ;
    let largest = number; 
    let middle = Math.trunc((largest+smallest)/2);
    
    while(largest*largest >= number){
        if(middle*middle === number){
            return middle;
        }
        else if(largest*largest === number){
            return largest;
        }
        else if(smallest*smallest === number){
            return smallest;
        }
        else if(middle*middle > number){
            largest = middle-1; //12
            middle = Math.trunc((largest+smallest)/2); 
        }
        else{
            smallest = middle+1; 
            middle = Math.trunc((largest+smallest)/2);
        }
    }
    
    return number * number;
}

//oneHundredToFive();
// console.log(absoluteValue(-3));
// console.log(absoluteValue(7.33));
// console.log(absoluteValue('hi'));
// multiplesOfFourOrSeven();
// console.log(square(5))    //return 25
// console.log(square(7))    //return 49
// console.log(square(25))  //return 5 because 25 is a perfect square with a root of 5
// console.log(square(36))   //return 6 because 36 is a perfect square with a root of 6.
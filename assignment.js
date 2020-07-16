/**
//feetToMile
function feetToMile(feet){
    if(feet > 0){
        var mile = feet / 5280;
        return mile;
    }else if(feet < 0){
        return "mile can't be negative";
    }else if(feet == 0){
        return "You entered 0";
    }
}
var calcFeet = feetToMile(150);
console.log(calcFeet); 


//woodCalculator
function woodCalculator(chair,table,bed){
    var total = (chair * 1) + (table * 3) + (bed * 5);
    return total;
}
var totalWood = woodCalculator(14,4,2);
console.log(totalWood);
 */

 //brickCalculator

 
 
 //tinyFriend
function tinyFriend(name){
    var small = name[0];
    for(var i=0; i<name.length; i++){
       var element = name[i];
       if(element.length < small.length){
           small = element;
       }
    }
    return small
}

var tinyName = tinyFriend(['tushar','aB','fahim','sohi','burhan','abc','mifta','sohi','cksfnssd','ab']);
console.log(tinyName);



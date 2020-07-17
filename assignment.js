//feetToMile
function feetToMile(feet){
    if(feet > 0){
        var mile = (feet / 5280).toFixed(4);
        return mile;
    }else if(feet < 0){
        return "Please Enter a positive value.";
    }else if(feet == 0){
        return "You entered 0";
    }
}


//woodCalculator
function woodCalculator(chair,table,bed){
    if(chair <0 || table < 0 || bed < 0){
        return "Please Enter Positive Values.";
    }
    else{
        var totalWood = (chair*1) + (table*3) + (bed*5);
        return totalWood;
    }
}


 //brickCalculator
 function brickCalculator(floor){
    if(floor<0){
        return "Please Enter Positive Value";
    }
    else if( floor>=0 && floor<=10){
        bricksWithinTen = floor*15*1000;
        return bricksWithinTen;
    }
    else if(floor>10 && floor<=20){
        var firstTenFloor = 10;
        var afterTenFloor = floor - firstTenFloor;
        var bricksWithinTwenty = (firstTenFloor*15*1000)+(afterTenFloor*12*1000);
        return bricksWithinTwenty;
    }
    else if(floor>20) {
       var firstTenFloor = 10;
       var secondTenFloor = 10;
       var firstTwentyFloor = firstTenFloor + secondTenFloor;
       var afterFirstTwentyFloor = floor - firstTwentyFloor;
       var totalBricks = (firstTenFloor*15*1000)+(secondTenFloor*12*1000)+(afterFirstTwentyFloor*10*1000);
       return totalBricks;
        
    }
 }



 //tinyFriend
function tinyFriend(name){
    var small = name[0];
    if(small.length == 0){
        return "It cant be empty, Please add name";
    }
    else{
         for(var i=0; i<name.length; i++){
       var element = name[i];
       if(element.length < small.length){
           small = element;
         }
       }
    }
   
    return small;
}




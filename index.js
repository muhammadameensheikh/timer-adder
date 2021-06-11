var labels = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];

//function to check that value 1 & value 2 are positive numbers
var valChecker = (val1, val2) => {
    if(typeof val1 === 'string' || val1 <= 0 || typeof val2 === 'string' || val2 <= 0 ){
        console.log('Please enter a positive number')
    }
}

//function to check that labels is being fetched from label array only
var labelChecker = (lab1, lab2) =>{
    if(!labels.includes(lab1) || !labels.includes(lab2)){
        console.log('The date format is incorrect')
    }
}


//main function to add time
var timeAdder = (value1, label1, value2, label2) =>{
   valChecker(value1, value2);
   labelChecker(label1, label2);

   switch (true) {
        case value1 > 1 && label1 == 'minute':
            return 'Verify if parameter is singular or plural';
        
        case value1 > 1 && label1 == 'hour':
            return 'Verify if parameter is singular or plural';
        
        case value1 == 1 && label1 == 'hours':
            return 'Verify if parameter is singular or plural'; 
        
        case value1 == 1 && label1 == 'minutes':
            return 'Verify if parameter is singular or plural';
        
        case value2 > 1 && label2 == 'minute':
            return 'Verify if parameter is singular or plural';
        
        case value2 > 1 && label2 == 'hour':
            return 'Verify if parameter is singular or plural';
        
        case value2 == 1 && label2 == 'hours':
            return 'Verify if parameter is singular or plural'; 
        
        case value2 == 1 && label2 == 'minutes':
            return 'Verify if parameter is singular or plural';
        
        case value1 == 1 && label1 == 'seconds':
            return 'Verify if parameter is singular or plural';
        
        case value1 > 1 && label1 == 'second':
            return 'Verify if parameter is singular or plural';      
    }
    
    var result;
    var resArr =[];
    if(label1 == 'hours' || label1 == 'hour' && label2 == 'hours' || label2 == 'hour'){
        result = value1 + value2;
        if(label1 == 'hours'){
            resArr = [result, label1]
        }
        else{
            resArr = [result, label1+'s'];
        }
        return resArr;
    }
    if(label1 == 'minutes' || label1 == 'minute' && label2 == 'minutes' || label2 == 'minute'){
        result = value1 + value2;
        if(label1 == 'minutes'){
            resArr = [result, label1]
        }
        else{
            resArr = [result, label1+'s'];
        }
        return resArr;
    }
    if(label1 == 'seconds' || label1 == 'second' && label2 == 'seconds' || label2 == 'second'){
        result = value1 + value2;
        if(label1 == 'seconds'){
            resArr = [result, label1]
        }
        else{
            resArr = [result, label1+'s'];
        }
        return resArr;
    }
    if(label1 == 'days' || label1 == 'day' && label2 == 'days' || label2 == 'day'){
        result = value1 + value2;
        if(label1 == 'days'){
            resArr = [result, label1]
        }
        else{
            resArr = [result, label1+'s'];
        }
        return resArr;
    }

    if(label1 == 'hours' || label1 == 'hour' &&  label2 == 'minutes'  || label2 == 'minute'  ) {
        result = value1 * 60 + value2;
        if(label2 == 'minutes'){
            resArr = [result, label1]
        }
        else{
            resArr = [result, label2+'s'];
        }
        return resArr;
    }

     if(label1 == 'minute' || label1 == 'minutes' &&  label2 == 'hour' || label2 == 'hours' ) {
        result = value2 * 60 + value1;
        if(label1 == 'minutes'){
            resArr = [result, label1]
        }
        else{
            resArr = [result, label1+'s'];
        }
        return resArr;
    }
    
   if(label1 == 'second' || label1 == 'seconds' &&  label2 == 'minute' || label2 == 'minutes' ) {
        result = value2 * 60 + value1;
        if(label1 == 'seconds'){
            resArr = [result, label1]
        }
        else{
            resArr = [result, label1+'s'];
        }
        return resArr;
    }
    
    if(label1 == 'minute' || label1 == 'minutes' &&  label2 == 'second' || label2 == 'seconds' ) {
        result = value1 * 60 + value2;
        if(label2 == 'seconds'){
            resArr = [result, label2]
        }
        else{
            resArr = [result, label2+'s'];
        }
        return resArr;
    }
    else{
        return false
    }

}
timeAdder(1, 'second', 5, 'minutes')


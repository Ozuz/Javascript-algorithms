function convertFahrToCelcius(x){
   if (typeof x == 'number'){
        let answer;
    let result = "";
    result = (x-32) * 5/9;
    answer = result.toFixed(4);
    return answer;
   }  
   
   else if (typeof x == 'string'){
       var xNumber = Number(x);
    
       if (isNaN(xNumber)){
        return ((JSON.stringify(x)) + " is not a valid number but a/an"+ " " + ( typeof x))
       } else {
        let answer;
        let result = "";
        result = (x-32) * 5/9;
        answer = result.toFixed(4);
        return answer;
       }

   }

   else if (typeof x == 'object'){
       if (Array.isArray(x)){
        return ((JSON.stringify(x)) + " is not a valid number but a/an array")
       }
     else return ((JSON.stringify(x)) + " is not a valid number but a/an"+ " " + ( typeof x))
   }
      if (isNaN(xNumber)){
     return ((JSON.stringify(x)) + " is not a valid number but a/an"+ " " + ( typeof x))
   }
   
}

console.log(convertFahrToCelcius(0));
console.log(convertFahrToCelcius("0iu"));
console.log(convertFahrToCelcius([1,2,3]));
console.log(convertFahrToCelcius({temp: 0}));
console.log(convertFahrToCelcius(true))
console.log(convertFahrToCelcius("0"));



function checkYuGiOh(number){
  for(var n=0; n<number; n++) 
  { if(n % 2 === 0 && n % 3 === 0 && n % 5 === 0){console.log("YuGiOh");
} 
  else if (n % 2 === 0){console.log("yu");
}
else if (n % 3 === 0){console.log("gi");
}
else if (n % 5 === 0){console.log("oh");
}
else if (n==="fizzbuzz is meh"){console.log("fizzbuzz is meh:invalid parameter");
}
else{ console.log("value of n is" + n);}
}
}

checkYuGiOh(10);
checkYuGiOh(5);
checkYuGiOh("fizzbuzz is meh");






function Casex (val) {
  
    var x = 0;
    while(val !== 0)
    {
        
       x = (val%10)+x;
       val = Math.floor(val / 10);
       
    }
    console.log(x);
    
  }
  var str = prompt(" ");
  
  if(str % 2 === 0){
    console.log("even");
  }
  else{
    console.log("odd");
  }
  Casex(str);
var isHappy = function(n) {
    let digits =  Math.floor(Math.log10(n)) + 1
   if(n === 1 || n == 7) return true
   if(digits === 1) return false
   let temp = n
   while(Math.log10(temp) >= 1 ){
       temp = String(temp).split("").reduce((acc,curr)=> acc + parseInt(curr)**2,0)
       if(temp === 1 || temp === 7) return true
   }
   return false
   
};
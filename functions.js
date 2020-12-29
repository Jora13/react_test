// ...all
function sumAll(...all){
   let result = 0;
   for (const num of all) {
      result += num
   }
   console.log(result);
}
sumAll(23,22,5);

// Замыкания

function createMember(name){
   return function(lastName){
      console.log(name+' '+lastName);
   }
}

const logWithLastname = createMember('Jora')
logWithLastname('Pozhematkin')
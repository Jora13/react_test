const person = Object.create({
   calculateAge(){
      console.log(new Date().getFullYear() - this.birthYear);
   }
},
{
   name: {
     value: 'Jora',
     enumerable: true,
     writable: true,
     configurable: true
   },
   birthYear: {
      value: 1979,
      enumerable: false
   },
   age: {
      get(){
         return new Date().getFullYear() - this.birthYear
      },
      set(value){
         console.log('Set age', value);
         document.body.style.background = '#0f0f0f'
      },
   }
})

for (let key in person) {
   if(person.hasOwnProperty(key)){
      console.log(key);
   }
}
console.log(person.age);
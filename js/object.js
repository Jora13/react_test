const person = {
   name: 'Jora',
   age: 41,
   isProgrammer: true,
   language: ['ru', 'en', 'uk'],
   // 'complex key': 'Complex value',
   // ['key_' + (1 + 3)]: 'Computed key',
   greet(){
      console.log('greet from person');
   },
   info(){
      console.log('Name_ ', this);
      console.info('Info about this people ', this.name);
   }
}

//person['key_4'] = undefined

//delete person['key_4']

// for (const key in person) {
//    if(person.hasOwnProperty(key)){
//       console.log(`key: ${key}`);
//       console.log(`value: ${person[key]}`);
//    }
// }
// console.log(person);

// const keys = Object.keys(person)
// keys.forEach((key) => {
//    console.log(key);
//    console.log(`value: ${person[key]}`);
// })

person.info()
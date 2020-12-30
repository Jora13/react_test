function hello(){
   console.log('Hello!', this);
}

const person = new Object({
   name: 'Maxim',
   age: 26,
   sayHello: hello,
   sayHelloWindow: hello.bind(window),
   logInfo: function(job, phone) {
      console.group(`${this.name}`);
      console.log(`Name is ${this.name}`)
      console.log(`Age is ${this.age}`)
      console.log(`Job is ${job}`)
      console.log(`Number phone ${phone}`)
      console.groupEnd();
   }
})

const lena = new Object({
   name: 'Lena',
   age: 23,
})

// 1 BIND
// const fnLenaInfoLog = person.logInfo.bind(lena, 'Designer', 0997809586)
// fnLenaInfoLog()

// 2 Call
// person.logInfo.bind(lena, 'Designer', 0997809586)()
// person.logInfo.call(lena, 'Designer', 0997809586)
person.logInfo.apply(lena, ['Designer', 0997809586])

const array = [1,2,3,4,5]
Array.prototype.multBy = function(n){

   return this.map(function(i){
      return i*n
   })
}

const pract = array.multBy(2)
console.log(pract);
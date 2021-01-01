const cars = [
   'mazda',
   'Ford',
   'BMW'
]

const fibs = [
   1,
   1,
   2,
   3,
   5
]

// const people = [
//    {
//       name: 'Jora',
//       budget: 4100
//    },
//    {
//       name: 'Nataly',
//       budget: 3900
//    },
//    {
//       name: 'Igor',
//       budget: 1900
//    },
// ]

// const index = people.findIndex(function(fg){
//    return fg.age === 39
// })


// // let findedPerson
// // for (const person of people) {
// //    console.log(person);
// //    if(person.age == 41){
// //       findedPerson = person.name
// //    }
// // }

// const person = people.find(function(person){
//    return person.age === 41
// })

// console.log(person.name);

// console.log(cars.includes('BMW'))

// const upperCaseCars = cars.map(car => {
//    return car.toUpperCase()
// })
// console.log(upperCaseCars);
// const pow2 = num => num ** 2
// const pop2fib = fibs.map(pow2)
// const filtrdNumbers = pop2fib.filter(num => {
//    return num < 20
// })

// console.log(pop2fib);
// console.log(filtrdNumbers);

const people = [
   {
      name: 'Jora',
      budget: 4100
   },
   {
      name: 'Nataly',
      budget: 3900
   },
   {
      name: 'Igor',
      budget: 1900
   },
]

const allBudget = people
.filter(person => person.budget > 3000)
.reduce((acc, person) => {
   acc += person.budget
   return acc
}, 0)

console.log(allBudget);
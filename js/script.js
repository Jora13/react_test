const delay = ms => {
   return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos/'


//Старый способ
// function fetchTodos(){
//    console.log('FetchTodo start');
//    return delay(2000)
//    .then(() => fetch(url))
      
//    .then(response => response.json())
// }

// fetchTodos()
//    .then(data => {
//       console.log(data);
//    })
//    .catch(e => console.error(e))

// ES6 способ

async function fetchAsyncTodos() {
   console.log('FetchTodo start');
   try{
      await delay(2000)
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
   } catch {
      console.error(e)
   }
}

fetchAsyncTodos()
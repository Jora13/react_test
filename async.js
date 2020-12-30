// setTimeout(() => {
//    console.log('after Timeout');
// }, 1000)

const delay = (wait = 1000) => {
   const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve()
      }, wait)
   })
   return promise
}

// delay(2500)
//    .then(() => {
//       console.log('after 2 secconds');
//    })
//    .catch(err => console.error(err))
//    .finally(() => {
//       console.log('Finally');
//    })

const getData = () => new Promise(resolve => resolve([
   1,1,2,3,5,8,13
]))

getData().then(data => console.log(data))

async function asyncExample(){
   try{
      await delay(2000)
      const data = await getData()
      console.log(data);
   } catch(e) {
      console.log(e);
   } finally {
      console.log('finally');
   }
}

asyncExample();
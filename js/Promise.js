// console.log('Request Data...');
// const p = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       console.log('Prepearing Data...');

//       const backEndData = {
//          server: 'aws',
//          port: 2000,
//          status: 'working'
//       }
//       resolve(backEndData)
//    }, 2000)
// })

// p.then(data => {
//    const p2 = new Promise((resolve, reject) => {
//       setTimeout(() => {
//          data.modified = true
//          resolve(data);
//       })
//    })
//    console.log('Promise resolved', data);
//    p2.then(clientData => {
//       console.log('Data receved', clientData);
//    })
// })

const sleep = ms => {
   return new Promise(resolve => {setTimeout(() => resolve(), ms )})
}

sleep(2000).then(() => {
   console.log('2 sec');
})

sleep(4000).then(() => {
   console.log('4 sec');
})

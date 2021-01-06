let initialStore = {
   line: [
      {
         id: 1,
         name: 'Profiles',
         url: '/profile'
      },
      {
         id: 2,
         name: 'Messages',
         url: '/dialog'
      },
      {
         id: 3,
         name: 'News',
         url: '/'
      },
      {
         id: 4,
         name: 'Music',
         url: '/'
      },
   ],
   friends: [
      {
         id: 1,
         name: 'Gennadiy',
         link: "",
         imgUrl: 'https://i.pinimg.com/originals/2b/4c/7f/2b4c7f6f4318c2361cfb39c9b79af31d.jpg'
      },
      {
         id: 2,
         name: 'Gosha',
         link: "",
         imgUrl: 'https://i.pinimg.com/originals/2b/4c/7f/2b4c7f6f4318c2361cfb39c9b79af31d.jpg'
      },
      {
         id: 3,
         name: 'Elena',
         link: "",
         imgUrl: 'https://i.pinimg.com/originals/2b/4c/7f/2b4c7f6f4318c2361cfb39c9b79af31d.jpg'
      },
   ]
}

const sidebarReducer = (state = initialStore, action) => {
   return state
}




export default sidebarReducer
let state = {
   profilePage: {
      posts: [
         {
            id: 1,
            name: 'nameuser 1',
            message: 'How are you',
            likeCount: 3
         },
         {
            id: 2,
            name: 'nameuser 2',
            message: 'i learn jsx',
            likeCount: 0
         }
      ],
   },
   dialogsPage: {
      dialogs: [
         {
            name: 'Jora',
            uri: 'j',
            id: 1
         },
         {
            name: 'Nata',
            uri: 'n',
            id: 2
         },
         {
            name: 'Igor',
            uri: 'i',
            id: 3
         },
         {
            name: 'Varvara',
            uri: 'v',
            id: 4
         }
      ],
      messages: [
         {
            id: 1,
            name: 'nameuser 1',
            message: 'How are you'
         },
         {
            id: 2,
            name: 'nameuser 2',
            message: 'good day'
         }
      ],
   },
   sidebar: {
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
            url: 'good day'
         },
         {
            id: 4,
            name: 'Music',
            url: 'good day'
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

}

export default state
let store = {
   _state: {
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
         newPostText: 'jora'
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
         newDialogText: "mess"
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
   },
   _callSubscriber() {
      console.log('observer');
   },

   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },

   dispatch(action) {
      if (action.type === 'ADD-POST') {
         let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: action.postMessage,
            name: ''
         }
         this._state.profilePage.posts.push(newPost)
         this._state.profilePage.newPostText = ''
         this._callSubscriber(this._state)
      } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText
         this._callSubscriber(this._state)
      } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
         this._state.dialogsPage.newDialogText = action.newText
         this._callSubscriber(this._state)
      } else if (action.type === 'ADD-DIALOG-POST') {
         let newMessage = {
            id: this._state.dialogsPage.messages.length + 1,
            message: action.postMessage,
            name: '',
            likeCount: 0
         }
         this._state.dialogsPage.messages.push(newMessage)
         this._callSubscriber(this._state)
      }
   }
}

export default store
window.store = store
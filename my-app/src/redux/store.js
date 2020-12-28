import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

let store = {

   _state: {
      sidebarFriends: {
         elem: [
            {
               text: "hello girls",
               imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU"
            },
            {
               text: "hello boys",
               imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU"
            },
            {
               text: "hello wife",
               imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU"
            },
         ]
      },
      profilePage: {
         posts: [
            {
               message: "Hi!",
               headline: "New Post",
               id: "1",
               likecount: "5"
            },
            {
               message: "Hi!",
               headline: "Old Post",
               id: "2",
               likecount: "25"
            },
         ],
         newPostText: 'jora',
      },
      dialogPage: {
         dialogsData: [
            {
               name: "Andrey",
               link: "1",
            },
            {
               name: "Nataly",
               link: "2",
            },
            {
               name: "Georgiy",
               link: "3",
            }
         ],
         messagesData: [
            {
               message: "Hi!",
               id: "1",
            },
            {
               message: "Good day!",
               id: "2",
            },
            {
               message: "How are you",
               id: "3",
            }
         ],
         newMessageBody: "",
      },
   },
   _callSubscriber() {
      console.log('State rerenderEntireTree research');
   },

   getState() {
      return this._state;
   },
   subscripbe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) { // type="ADD-POST"

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
      this._state.sidebarFriends = sidebarReducer(this._state.sidebarFriends, action);

      this._callSubscriber(this._state);
   }

}

export default store;

window.store = store;
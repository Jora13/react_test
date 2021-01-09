const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_DIALOG_POST = 'ADD-DIALOG-POST'

let initialStore = {
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
      },
      {
         id: 3,
         name: 'nameuser3',
         message: 'How are you'
      },
      {
         id: 4,
         name: 'nameuser4',
         message: 'good day'
      }
   ],
   newDialogText: "mess"
}

const dialogsReducer = (state = initialStore, action) => {



   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state
         }

      case ADD_DIALOG_POST:
         let messBody = action.postMessage
         return {
            ...state,
            newPostText: '',
            messages: [...state.messages, {
               id: state.messages.length + 1,
               message: messBody,
               name: '',
               likeCount: 0
            }]
         }

      default:
         return state
   }
}

export const updateNewMessageActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text
   }
}

export const addDialogPostActionCreator = (text) => {
   return {
      type: ADD_DIALOG_POST,
      postMessage: text
   }
}

export default dialogsReducer
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialStore = {
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
}

const profileReducer = (state = initialStore, action) => {

   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: state.posts.length + 1,
            message: action.postMessage,
            name: ''
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''

         }
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         }
      }
      default:
         return state
   }

}

export const addPostActionCreator = (text) => {
   return {
      type: ADD_POST,
      postMessage: text
   }
}

export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}

export default profileReducer
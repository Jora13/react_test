const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText,
            headline: "",
            likecount: 0,
         }
         state.posts.push(newPost);
         state.newPostText = '';
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;

      default:
         return state;
   }
}

export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
}
export const updeteNewPostActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}

export default profileReducer;
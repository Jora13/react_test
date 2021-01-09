import React from 'react'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer'
import { connect } from 'react-redux'
import MyPosts from './MyPosts'



// const MyPostsContainer = (props) => {

//    // let state = props.store.getState()



//    return (
//       <StoreContext.Consumer>
//          {
//             (store) => {
//                let state = store.getState()
//                let addPost = (text) => {
//                   store.dispatch(addPostActionCreator(text))
//                }
//                let onPostChange = (text) => {
//                   store.dispatch(updateNewPostTextActionCreator(text))
//                }
//                return <MyPosts updateNewPostText={onPostChange}
//                   addPost={addPost}
//                   posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
//             }
//          }
//       </StoreContext.Consumer>
//    )
// }

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (text) => {
         dispatch(addPostActionCreator(text))
      },
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text))
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
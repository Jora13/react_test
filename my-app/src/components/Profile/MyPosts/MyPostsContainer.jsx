import React from 'react';
import { addPostActionCreator, updeteNewPostActionCreator } from "../../../redux/profileReducer"
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let addPostChange = (text) => {
      let action = updeteNewPostActionCreator(text);
      props.dispatch(action);
   }

   return (
      <MyPosts updateNewPostText={addPostChange} addPost={addPost}
         posts={props.posts} jora="jora" />

   )
}

export default MyPostsContainer;
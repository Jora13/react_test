import React from 'react';
import Posts from "./Post/Posts"
import ProfilePostInfo from "./ProfilePostInfo";
import MyPostsContainer from './MyPostsContainer';
import { addPostActionCreator, updeteNewPostActionCreator } from "../../../redux/profileReducer"


const MyPosts = (props) => {
   console.log(props);
   let postsElement = props.posts.map(el => <Posts message={el.message} headline={el.headline} likecount={el.likecount} />);

   let newPostElement = React.createRef();
   let onAddPost = () => {
      props.dispatch(addPostActionCreator());
   }
   let addPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div>
         <img src="https://nnst1.gismeteo.ru/images/2018/11/3dec58c8.jpg" className="content_page_img" />
         <div className="content_page_title">
            Posts
         </div>
         <div className="content_page_post_form">
            <textarea name="" onChange={addPostChange} ref={newPostElement}
               value={props.newPostText} />
            <button className="btn" onClick={onAddPost}>Send post</button>
         </div>


         <ProfilePostInfo />

         <div className="content_page_myposts_title">
            My posts
         </div>

         {
            postsElement
         }

      </div>

   )
}

export default MyPosts;
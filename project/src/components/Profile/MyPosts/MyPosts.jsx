import React from 'react'
import Post from "./Post/Post"

const MyPosts = (props) => {
   let postElements = props.posts.map((el) => {
      return (<Post message={el.message} likecount={el.likeCount} />)
   })

   let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value
      //props.addPost(text)
      props.dispatch({ type: 'ADD-POST', postMessage: text })
   }
   let onPostChange = () => {
      let text = newPostElement.current.value
      //props.updateNewPostText(text)
      props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
   }

   return (
      <div className="profile__posts">
         <div className="profile__posts_title">
            My posts
			</div>
         <div className="profile__posts_form">
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
            <button className="btn" onClick={addPost}>
               Send
				</button>
         </div>
         <div className="profile__posts_elements">
            {postElements}
         </div>
      </div>
   )
}

export default MyPosts
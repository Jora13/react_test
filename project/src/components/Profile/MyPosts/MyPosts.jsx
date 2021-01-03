import Post from "./Post/Post"

const MyPosts = (props) => {
   let postElements = props.posts.map((el) => {
      return (<Post message={el.message} likecount={el.likeCount} />)
   })
   return (
      <div className="profile__posts">
         <div className="profile__posts_title">
            My posts
			</div>
         <div className="profile__posts_form">
            <textarea placeholder="you news..."></textarea>
            <button className="btn">
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
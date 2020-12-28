import MyPosts from "./MyPosts/MyPosts"
import ProfilePostInfo from "./MyPosts/ProfilePostInfo";

const Profile = (props) => {

   return (
      <div className="content_page">
         <MyPosts
            posts={props.state.posts}
            newPostText={props.state.newPostText}
            dispatch={props.dispatch} />

      </div>
   )
}

export default Profile;
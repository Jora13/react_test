import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
   return (
      <div className="profile">
         <ProfileInfo posts={props.state.posts} />
         <MyPosts posts={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText} />
      </div>
   )
}

export default Profile
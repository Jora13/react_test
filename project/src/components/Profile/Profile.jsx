import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
   console.log(props);
   return (
      <div className="profile">
         <ProfileInfo posts={props.state.posts} />
         <MyPosts posts={props.state.posts} />
      </div>
   )
}

export default Profile
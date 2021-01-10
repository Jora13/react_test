import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
   return (
      <div className="profile">
         {/* <ProfileInfo posts={props.state.posts} /> */}
         <ProfileInfo profile={props.profile} />
         {/* <MyPostsContainer store={props.store} /> */}
         <MyPostsContainer />
      </div>
   )
}

export default Profile
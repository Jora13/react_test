const ProfileInfo = (props) => {
   return (
      <div className="profile__user">
         <div className="profile__avatar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JiUY3qAix-3Hv0XA8w_qaTn3gKQgqSKRPg&usqp=CAU" />
         </div>
         <div className="profile_user_info">
            <div className="profile_user_title">
               Jora Pozhematkin
            </div>
            <div className="profile_user_date">
               1986
            </div>
            <div className="profile_user_city">
               Donetsk
            </div>
         </div>
      </div>
   )
}

export default ProfileInfo
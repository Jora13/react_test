import React from 'react'
import Preloader from '../../common/preloader/Preloader'

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div className="profile__user">
         <div className="profile__avatar">
            <img src={props.profile.photos.small} alt="" />
         </div>
         <div className="profile_user_info">
            <div className="profile_user_title">
               {props.profile.fullName}
            </div>
            <div className="profile_user_date">
               {props.profile.aboutMe}
            </div>
            <div className="profile_user_city">
               {props.profile.contacts.facebook}
            </div>
         </div>
      </div>
   )
}

export default ProfileInfo
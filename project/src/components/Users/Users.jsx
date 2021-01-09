import React from 'react'
import userPhoto from '../../assets/images/logo.jpg'

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return <div>
      <div className="pager">
         {pages.map(p => {
            console.log(props.currentPage);
            return <button className={props.currentPage === p && 'active'}
               onClick={(e) => { props.onPageChanged(p) }}>{p}</button>
         })}
      </div>
      {
         props.users.map(u => <div className="users_wrap" key={u.id}>
            <div className="users_avatar">
               <div className="users_imgwr">
                  <img src={u.photos.small ? u.photos.small
                     : userPhoto} />
               </div>
               <div className="users_follow">
                  {u.followed
                     ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                     : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
               </div>
            </div>
            <div className="users_info">
               <div className="users_info_headline">
                  <div className="users_info_fullname">
                     {u.name}
                  </div>
                  <div className="users_info_status">
                     {u.status}
                  </div>
               </div>
               <div className="users_info_location">
                  <div className="users_info_country">
                     {"u.location.country"}
                  </div>
                  <div className="users_info_city">
                     {"u.location.city"}
                  </div>
               </div>
            </div>
         </div>
         )
      }
   </div >
}

export default Users
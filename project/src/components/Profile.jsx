const Profile = () => {
   return (
      <div className="profile">
         <div className="profile__user">
            <div className="profile__avatar">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JiUY3qAix-3Hv0XA8w_qaTn3gKQgqSKRPg&usqp=CAU" />
            </div>
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
         </div>
         <div className="profile__posts_element">
            How are you?
			</div>
         <div className="profile__posts_element">
            I am very well!
			</div>
      </div>
   )
}

export default Profile
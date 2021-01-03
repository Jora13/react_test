const Post = (props) => {
   return (
      <div className="profile__posts_element">
         <div className="profile__posts_imgwr">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWHO8yFW_RQPhpODr66vp8Vlx4FSkFOyF4Q&usqp=CAU" alt="" />
         </div>
         <div className="profile__posts_element_content">
            {props.message}
         </div>
         <div className="profile__posts_element_liked">
            Like: {props.likecount}
         </div>
      </div>
   )
}

export default Post
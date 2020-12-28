const SidebarFriends = (props) => {
   return (
      <div className="el">
         <div className="el_img">
            <img src={props.imgsrc} alt="" />
         </div>
         <div className="el_name">
            {props.text}
         </div>
      </div>
   )
}
export default SidebarFriends;
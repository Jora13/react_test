import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
   let path = "/dialogs/" + props.link;
   return (
      <div className="dialogs_menu_item">
         <NavLink to={path}>{props.username}</NavLink>
      </div >
   )
}
export default DialogItem;
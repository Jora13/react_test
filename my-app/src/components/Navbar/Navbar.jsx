import { NavLink } from "react-router-dom";
import SidebarFriends from "./../Sidebar/Sidebar";

const Navbar = (props) => {

   let friends = props.state.elem.map((el) => <SidebarFriends imgsrc={el.imgsrc} text={el.text} />);
   return (
      <div className="sidebar">
         <ul className="sidebar_nav">
            <li>
               <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
               <NavLink to="/dialogs">Messages</NavLink>
            </li>
            <li>
               <NavLink to="/s">News</NavLink>
            </li>
            <li>
               <NavLink to="/s">Music</NavLink>
            </li>
            <li>
               <NavLink to="/s">Settings</NavLink>
            </li>
         </ul>
         <div className="sidebar_friends">
            <p className="sidebar_friends_title">
               Friends
            </p>
            <div className="df">
               {
                  friends
               }
            </div>
         </div>
      </div>
   )
}

export default Navbar;
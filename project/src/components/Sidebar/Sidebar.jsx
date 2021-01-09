import { NavLink } from "react-router-dom"
import Friend from "./Friends"

const Sidebar = (props) => {

   // let navlinkElements = props.state.line.map(
   //    (el) => {
   //       return <li><NavLink to={el.url}
   //          className="sidebar__link"
   //          activeClassName="active">
   //          {el.name}
   //       </NavLink></li>
   //    }
   // )

   // let friendElements = props.state.friends.map((el) => {
   //    return (<Friend url={el.imgUrl} name={el.name} link={el.link} />)
   // })

   return (
      <div className="sidebar">
         <nav className="sidebar__menu">
            <ul className="sidebar__list">
               {/* {navlinkElements} */}
               <li>
                  <NavLink to="/profile"
                     className="sidebar__link"
                     activeClassName="active">
                     Profiles
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/dialog"
                     className="sidebar__link"
                     activeClassName="active">
                     Dialogs
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/users"
                     className="sidebar__link"
                     activeClassName="active">
                     Users
                  </NavLink>
               </li>
            </ul>
            <NavLink to="/settings" activeClassName="active">Settings</NavLink>
         </nav>
         <div className="sidebar_friends">
            {/* {friendElements} */}
         </div>
      </div>
   )
}

export default Sidebar
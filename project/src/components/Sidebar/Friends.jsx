import { NavLink } from "react-router-dom"

const Friend = (props) => {
   return (
      <NavLink to={props.link} className="sidebar_friend">
         <div className="imgwr">
            <img src={props.url} alt="" />
         </div>
         <p className="sidebar_friend_text">
            {props.name}
         </p>
      </NavLink>
   )
}

export default Friend
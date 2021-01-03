import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
   return (
      <li>
         <NavLink to={"dialog/" + props.uri}>{props.name}</NavLink>
      </li>
   )
}

export default DialogItem
import { NavLink } from "react-router-dom";

const Header = () => {
   return (
      <header className="header">
         <NavLink to="" className="logo">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png" width="125" />
         </NavLink>
      </header>
   )
}

export default Header;
import React from 'react'
import { NavLink } from "react-router-dom"

const Header = (props) => {
   return (
      <header className="header">
         <a href="" className="header__logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYljJtYJXTvXGlzaAF8-48Pky-fDVlStv0w&usqp=CAU" alt="" />
         </a>
         <div className="header__burger">
            <button className='btn'></button>
         </div>
         <div className="login_block">
            {props.isAuth ? props.login :
               <NavLink to="/login">LogIn</NavLink>}
         </div>
      </header>
   )
}

export default Header
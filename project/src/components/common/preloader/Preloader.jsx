import React from 'react'
import preloader from './../../../assets/images/loader.gif'

let Preloader = (props) => {
   return (
      <div className="preloader"><img src={preloader} /></div>
   )
}

export default Preloader
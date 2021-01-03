import { NavLink } from "react-router-dom"

const Message = (props) => {
   return (
      <div className="dialog_message">
         <div className="dialog_message_avatar">
            <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JiUY3qAix-3Hv0XA8w_qaTn3gKQgqSKRPg&usqp=CAU"
            />
            <p>{props.name}</p>
            <div className="dialog_message_content">
               <p>
                  {props.message}
               </p>
            </div>
         </div>
      </div>
   )
}


export default Message
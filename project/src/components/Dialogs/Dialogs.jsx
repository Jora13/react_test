import { NavLink } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"


const Dialogs = (props) => {

   let dialogsElements = props.state.dialogs.map((el) => {
      return (
         <DialogItem name={el.name} uri={el.uri} />
      )
   })
   let messageElements = props.state.messages.map((el) => {
      return (
         <Message name={el.name} message={el.message} />
      )
   })

   return (
      <div className="dialogs">
         <div className="dialogs_wrap">
            <div className="dialog_users">
               <ul>
                  {dialogsElements}
               </ul>
            </div>
            <div className="dialog_messages_wrap">
               {messageElements}
            </div>
         </div>
      </div>
   )
}

export default Dialogs
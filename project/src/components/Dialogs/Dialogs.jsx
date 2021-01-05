import { NavLink } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import React from 'react'


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
   let newDialogPost = React.createRef();

   let addDialogPost = () => {
      let text = newDialogPost.current.value
      //props.addDialogPost(text)
      props.dispatch({ type: 'ADD-DIALOG-POST', postMessage: text })
   }
   let onDialogChange = () => {
      let text = newDialogPost.current.value
      //props.updateNewMessageText(text)
      props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text })
   }

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
               <div className="profile__posts">
                  <div className="profile__posts_title">
                     My posts
                  </div>
                  <div className="profile__posts_form">
                     <textarea placeholder="you news..." ref={newDialogPost} onChange={onDialogChange} value={props.newDialogText}></textarea>
                     <button className="btn" onClick={addDialogPost}>
                        Send
                  </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs
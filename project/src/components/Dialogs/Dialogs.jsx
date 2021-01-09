import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import React from 'react'
import { updateNewMessageActionCreator, addDialogPostActionCreator } from "../../redux/dialogsReducer"


const Dialogs = (props) => {

   let state = props.dialogsPage

   let dialogsElements = state.dialogs.map((el) => {
      return (
         <DialogItem name={el.name} key={el.id} uri={el.uri} />
      )
   })

   let messageElements = state.messages.map((el) => {
      return (
         <Message name={el.name} key={el.id} message={el.message} />
      )
   })

   let newDialogPost = React.createRef();

   let addDialogPost = () => {
      let text = newDialogPost.current.value
      props.addPost(text)
      newDialogPost.current.value = ''
   }
   let onDialogChange = () => {
      let text = newDialogPost.current.value
      props.updateNewPostText(text)
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
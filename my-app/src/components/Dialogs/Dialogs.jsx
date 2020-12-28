import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import { updeteNewMessageBodyCreator, sendMessageCreator } from './../../redux/dialogReducer'


const Dialogs = (props) => {

   // let state = props.store._state.dialogPage;
   let state = props.store;



   let dialogsElements = state.dialogsData.map((el) => <DialogItem username={el.name} link={el.link} />);
   let dialogsMessages = state.messagesData.map((el) => <DialogMessage message={el.message} />);
   let newMessageBody = state.newMessageBody;

   let onSendMessageClick = () => {
      props.dispatch(sendMessageCreator());
   }

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.dispatch(updeteNewMessageBodyCreator(body));
   }

   return (
      <div className="content_page">
         <div className="dialogs_wrap">
            <div className="dialogs_menu">
               {
                  dialogsElements
               }
            </div>
            <div className="dialogs_messages">
               {
                  dialogsMessages
               }
            </div>
         </div>
         <div className="content_page_title">
            Posts
         </div>
         <div className="content_page_post_form">
            <textarea value={newMessageBody} placeholder="Enter your message"
               onChange={onNewMessageChange} />
            <button className="btn" onClick={onSendMessageClick}>Send post</button>
         </div>
      </div>
   )
}

export default Dialogs;
import React from 'react'
import { updateNewMessageActionCreator, addDialogPostActionCreator } from "../../redux/dialogsReducer"
import StoreContext from '../../storeContext'
import Dialogs from "./Dialogs"


const DialogsContainer = (props) => {

   // let newDialogPost = React.createRef();

   // let addDialogPost = (text) => {
   //    props.store.dispatch(addDialogPostActionCreator(text))
   // }
   // let onDialogChange = (text) => {
   //    props.store.dispatch(updateNewMessageActionCreator(text))
   // }

   return (
      <StoreContext.Consumer>
         {
            (store) => {
               let state = store.getState().dialogsPage
               let addDialogPost = (text) => {
                  store.dispatch(addDialogPostActionCreator(text))
               }
               let onDialogChange = (text) => {
                  store.dispatch(updateNewMessageActionCreator(text))
               }
               return (<Dialogs store={store}
                  addPost={addDialogPost} updateNewPostText={onDialogChange} />)
            }
         }
      </StoreContext.Consumer>
   )
}

export default DialogsContainer
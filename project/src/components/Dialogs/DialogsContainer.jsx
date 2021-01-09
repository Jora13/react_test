import React from 'react'
import { connect } from 'react-redux'
import { updateNewMessageActionCreator, addDialogPostActionCreator } from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"


let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (text) => {
         dispatch(addDialogPostActionCreator(text))
      },
      updateNewPostText: (text) => {
         dispatch(updateNewMessageActionCreator(text))
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
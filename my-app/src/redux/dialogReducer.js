const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
   dialogsData: [
      {
         name: "Andrey",
         link: "1",
      },
      {
         name: "Nataly",
         link: "2",
      },
      {
         name: "Georgiy",
         link: "3",
      }
   ],
   messagesData: [
      {
         message: "Hi!",
         id: "1",
      },
      {
         message: "Good day!",
         id: "2",
      },
      {
         message: "How are you",
         id: "3",
      }
   ],
   newMessageBody: "",
};

const dialogReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
         return state;

      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = '';
         state.messagesData.push({ id: 6, message: body });
         return state;

      default:
         return state;
   }

}

export const sendMessageCreator = () => {
   return {
      type: SEND_MESSAGE
   }
}
export const updeteNewMessageBodyCreator = (body) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
   }
}

export default dialogReducer;
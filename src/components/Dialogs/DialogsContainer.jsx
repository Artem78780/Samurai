import { connect } from "react-redux";
import { sendMessage, updateNewMessageText } from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";


let mapStateToProps = (state) =>{
  return{
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    updateNewMessageBody: () => {
      dispatch(sendMessage());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageText(body));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

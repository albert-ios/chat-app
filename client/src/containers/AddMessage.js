import { connect } from 'react-redux';
import AddMessageComponent from '../components/AddMessage';
import { addMessage } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (message) => {
    const author = sessionStorage.getItem('chat_author') || 'Юзер';
    dispatch(addMessage(message, author));
  }
});

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent);

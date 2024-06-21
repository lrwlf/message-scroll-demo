import Message from '../message'

import './index.css'

function ChatFlex(props) {
  return (
    <div className="chat-flex">
        <div className='place-holder' ></div>
        {props.messageList.map(item=> <Message message={item} />
        )}
    </div>
  );
}

export default ChatFlex;

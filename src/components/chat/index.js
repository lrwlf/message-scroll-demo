import { useRef, useEffect } from 'react';

import Message from '../message'

import './index.css'

function Chat(props) {
    const chatElement = useRef();

    useEffect(()=>{
        chatElement.current.addEventListener('wheel', event => {
            event.preventDefault(); // 阻止默认滚动行为
            const { deltaY } = event; // 获取滚动方向和速度
            chatElement.current.scrollTop -= deltaY; //  反转方向
          });
        return () => {
            //TODO removeListener
        }
    }, [])

  return (
    <div ref={chatElement} className="chat">
        {props.messageList.map(item=><div className='message-wrapper'>
            <Message message={item} />
        </div>)}
    </div>
  );
}

export default Chat;

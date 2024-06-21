import { useState, useEffect } from 'react';

import Chat from './components/chat';
import ChatFlex from './components/chat-flex'
import './App.css';

function App() {
  const [messageList, setMessageList] = useState(new Array(5).fill('默认消息消息消息消息消息消息消息消息消息消息消息消息消息消息'))
  const [startRender, setStartRender] = useState(false)
  useEffect(() => {
    if (!startRender) {
      return;
    }
    const timer = setTimeout(() => {
      setMessageList([messageList[0] + '逐字渲染', ...messageList.slice(1, messageList.length)])
    }, 100)
    return () => {
      clearTimeout(timer)
    }
  }, [messageList, startRender])

  return (
    <div className="App">
      {/* <Chat messageList={messageList} /> */}
      <ChatFlex messageList={messageList} />
      <button onClick={() => setMessageList([`第${messageList.length}条消息`, ...messageList])} className='send-button'>发消息</button>
      <button onClick={() => setStartRender(!startRender)} className='send-button'>逐字渲染</button>
    </div>
  );
}

export default App;

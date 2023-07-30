import React, { useEffect } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import { init, subscribeChat, subscribeInitialMessages } from '../socketApi'
import { useChat } from '../context/ChatContext'

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscribeInitialMessages((messages)=>setMessages(messages));
    subscribeChat((message) =>
      setMessages((prev) => [...prev, { message }]));
  }, [])

  return (
    <div>
      <ChatList />
      <ChatForm />
    </div>
  )
}

export default Container
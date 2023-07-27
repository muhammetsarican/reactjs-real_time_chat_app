import React from 'react'
import styles from "./styles.module.css"
import { useChat } from '../context/ChatContext'

function ChatList() {
  const {messages, setMessage}=useChat()
  console.log(messages)
  return (
    <div className={styles.chatList}>
      {messages.map((msg)=>(
        <div className={styles.chatBubble}>{msg.message}</div>
      )
      )}
    </div>
  )
}

export default ChatList
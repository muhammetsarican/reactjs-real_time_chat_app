import React from 'react'
import styles from "./styles.module.css"
import { useChat } from '../context/ChatContext'

function ChatList() {
  const {messages, setMessage}=useChat()
  return (
    <div className={styles.chatList}>
      {messages.map((msg)=>(
        <div className={`${styles.chatBubble} ${msg.fromMe ? styles.right : ""}`}>{msg.message}</div>
      )
      )}
    </div>
  )
}

export default ChatList
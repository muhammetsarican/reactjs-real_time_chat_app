import React from 'react'
import styles from "./styles.module.css"
import { useChat } from '../context/ChatContext'

import ScrollableFeed from "react-scrollable-feed"

function ChatList() {
  const { messages, setMessage } = useChat()
  return (
    <div className={styles.chatList}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((msg) => (
          <div className={`${styles.chatBubble} ${msg.fromMe ? styles.right : ""}`}>{msg.message}</div>
        )
        )}
      </ScrollableFeed>
    </div>
  )
}

export default ChatList
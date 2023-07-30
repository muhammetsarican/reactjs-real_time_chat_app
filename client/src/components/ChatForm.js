import React, { useState } from 'react'
import styles from "./styles.module.css"
import { sendMessage } from '../socketApi';
import { useChat } from '../context/ChatContext';
function ChatForm() {
  const [message, setMessage]=useState("");
  const {setMessages}=useChat();
  const handleSubmit=(e)=>{
    e.preventDefault();
    sendMessage(message)
    setMessages((prev)=>[...prev, {message, fromMe:true}])
    setMessage("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' className={styles.messageInput} value={message} onChange={(e)=>setMessage(e.target.value)}></input>
      </form>
    </div>
  )
}

export default ChatForm
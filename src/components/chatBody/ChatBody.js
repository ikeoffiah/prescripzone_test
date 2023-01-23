import React from 'react'
import ChatList from '../chatList/ChatList'
import ChatContent from '../chatContent/ChatContent'
import UserProfile from '../userProfile/UserProfile'
import './chatBody.css'

function ChatBody() {
  return (
    <div className='main__chatbody'>
        <ChatList/>
        <ChatContent/>
        <UserProfile/>
    </div>
  )
}

export default ChatBody
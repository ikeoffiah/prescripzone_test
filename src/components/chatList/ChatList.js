import React from 'react'
import { useState } from 'react'
import {allChatUsers} from '../repository/data'
import ChatListItems from './ChatListItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'
import './chatList.css'

function ChatList() {

  const [chat, setChat] = useState([]);

  

  return (
    <div className="main__chatlist">
        
        <div className="chatlist__heading">
          <h2>Doctor's Chat</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
       
        <div className="chatlist__items">
          {allChatUsers.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
                
              />
            );
          })}
        </div>
      </div>
  )
}

export default ChatList
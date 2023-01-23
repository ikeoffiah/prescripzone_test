import React from 'react'
import ChatContent from '../chatContent/ChatContent';
import Avatar from './Avatar'

function ChatListItems({image, name, animationDelay, active, isOnline}) {
    const selectChat = (e) => {
        for (
          let index = 0;
          index < e.currentTarget.parentNode.children.length;
          index++
        ) {
          e.currentTarget.parentNode.children[index].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
        
      };
  return (
    <div
    style={{ animationDelay: `0.${animationDelay}s` }}
    onClick={selectChat}
    className={`chatlist__item ${
      active ? active : ""
    } `}
  >
    <Avatar
      image={
        image ? image : "http://placehold.it/80x80"
      }
      isOnline={isOnline}
    />

    <div className="userMeta">
      <p>{name}</p>
      {/* <span className="activeTime">32 mins ago</span> */}
    </div>
  </div>
  )
}

export default ChatListItems
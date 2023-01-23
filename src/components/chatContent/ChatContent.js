import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Avatar from '../chatList/Avatar';
import ChatItem from './ChatItem';
import './ChatContent.css'
import { chatItem } from '../repository/data';
import Pusher from 'pusher-js';
import axios from 'axios';


function ChatContent({display_image}) {

const [chat, setChat] = useState(chatItem)
const [msg, setMsg] = useState("")
const [ dp, setDp] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU")


useEffect(() => {
  window.addEventListener("keydown", (e) => {
    if (e.number == 13) {
      if (msg !== "") {
        chatItem.push({
          key: 1,
          type: "",
          msg: msg,
          image:
            "https://res.cloudinary.com/dvjfsm8rc/image/upload/v1673094715/profileImage3_kdkmcd.jpg",
        });
        setChat([...chatItem]);
     
        setMsg("");
      }
    }
  });
}, [])






useEffect(() => {
  const pusher = new Pusher('ac26a2bfa2c2d993beef', {
    cluster: 'mt1'
  });

  
  
  const channel = pusher.subscribe('my-channel-doctor');

  channel.bind('my-event-doctor2', function(data) {
    
    var recieved_msg ={
      key: data["key"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: data["msg"],
    }

    
    setChat((prev)=>[...prev, recieved_msg])
   
  });
}, []);

const postMsg = async (value) => {
	try {
		const res = await axios.post('https://prescripzoneapp.herokuapp.com/api/messages', {
      "message": value,
      "name": "doctor1"
  });
	} catch (err) {
		console.log(err);
	}
};


const addMyChat = (msg) =>{
  var sent_chat = {
    key: chat.length + 1,
    image:
      "https://res.cloudinary.com/dvjfsm8rc/image/upload/v1673094715/profileImage3_kdkmcd.jpg",
    type: "",
    msg: msg,
  }
  setChat((prev)=>[...prev,sent_chat])
  setMsg("")
  postMsg(msg);
 


}


  return (
    <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
            <Avatar
                isOnline="active"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              />
              <p>Pius Chike</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
            <FontAwesomeIcon icon={faPlus} />
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={(e) =>{
                setMsg(e.target.value)
              }}
              value={msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn" onClick={()=>addMyChat(msg)}>
            <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
  )
}

export default ChatContent
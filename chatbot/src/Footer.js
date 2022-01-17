import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./Footer.css";
import "./components/Chat.css";
// import React from "react";

function Footer() {
  const [doChat, setDoChat] = useState("");
  const [doChats, setDoChats] = useState([]);
  const onChange = (event) => setDoChat(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (doChat === "") {
      return;
    }
    return (
      <div>
        <div className="inputChat">
          <form onSubmit={onSubmit}>
            <input
              className="underChat"
              type="text"
              value={doChat}
              placeholder="채팅을 입력하세요"
              onChange={onChange}
            />
          </form>
          <AiOutlineArrowUp className="btnEnter" onClick={onSubmit} />
        </div>
      </div>
    );
  };
}

export default Footer;

import React, { useState , useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./UnderBar.css";
// import Swal from "sweetalert2";

function UnderBar() {

  const [doChat, setDoChat] = useState("");
  const [doChats, setDoChats] = useState([]);

  const onChange = (event) => setDoChat(event.target.value);

  const LEFT_MESSAGES = "왼쪽으로 출력할게요";

  const onSubmit = (event) => {

    event.preventDefault();
    
    if (doChat === "") {
      return;
    } else if (doChat === "왼쪽") {
      return (
        setDoChats((currentArray) => [...currentArray, doChat]),
        setDoChats((currentArray) => [...currentArray, LEFT_MESSAGES])
      );
    }

    setDoChats((currentArray) => [...currentArray, doChat]);
    setDoChat("");

  };

  window.scrollBy(0, window.innerHeight);

  return (
    <>
      <div id="chatBoxWrap">
        {doChats.map((item, index) => (
          <div className="chatBox" key={index}>
            {item}
          </div>
        ))}
      </div>
      {/* 언더바 레이아웃 및 이벤트 등록 */}
      <div className="underBar">
        <form onSubmit={onSubmit}>
          <input
            className="chat"
            type="text"
            value={doChat}
            placeholder="채팅을 입력하세요"
            onChange={onChange}
          />
        </form>
        <AiOutlineArrowUp className="btnEnter" onClick={onSubmit} />
      </div>
    </>
  );
}

export default UnderBar;
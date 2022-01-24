import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./UnderBar.css";

function UnderBar() {

  const [doChat, setDoChat] = useState("");
  const [doChats, setDoChats] = useState([]);

  const onChange = (event) => setDoChat(event.target.value);

  let botMessage = "안녕";

  const onSubmit = (event) => {

    event.preventDefault();
    
    if (doChat === "") {
      return;
    } 

    setDoChats((currentArray) => [...currentArray, doChat]);
    setDoChat("");

    if (doChat === "안녕") {
      botMessage = "안녕하세요, 반갑습니다."
    } else if (doChat === "이름이 뭐야?") {
      botMessage = "제 이름은 정해지지 않았습니다."
    }
  };

  window.scrollBy(0, window.innerHeight);

  return (
    <>
      <div id="chatBoxWrap">
        {doChats.map((item, index) => (
          <>
          <div className="chatUser" key={index}>
            {item}
          </div>
          <div className="chatBot">{botMessage}</div>
          </>
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

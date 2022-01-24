import React, { useState , useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./UnderBar.css";
// import Swal from "sweetalert2";

function UnderBar() {

  const [doChat, setDoChat] = useState("");
  const [doChats, setDoChats] = useState([]);

  const onChange = (event) => setDoChat(event.target.value);

  const BOT_MESSAGE1 = "안녕하세요, 반갑습니다.";
  const BOT_MESSAGE2 = "제 이름은 정해지지 않았습니다."

  const date = new Date();

  const onSubmit = (event) => {

    event.preventDefault();
    
    if (doChat === "") {
      return;
    } else if (doChat === "안녕") {
      return (
        window.scrollBy(0, window.innerHeight),
        setDoChats((currentArray) => [...currentArray, doChat])
        // setDoChats((currentArray) => [...currentArray, BOT_MESSAGE1])
      );
    } else if (doChat === "이름이 뭐야?") {
      return (
        setDoChats((currentArray) => [...currentArray, doChat])
        // setDoChats((currentArray) => [...currentArray, BOT_MESSAGE2])
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
          <>
          <div className="chatBox" key={index}>
            {item}
          </div>
          <div className="chatBot">{BOT_MESSAGE1}</div>
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

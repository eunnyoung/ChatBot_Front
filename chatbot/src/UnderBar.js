import React, { useState, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import "./UnderBar.css";

function UnderBar() {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const nextId = useRef(0);

  // 시간
  function getDatetime() {
    let date = new Date();
    let time = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
    };
    return `${time.hours}:${time.minutes}`;
  }

  const onChange = (event) => {
    console.log(",,,,", message);
    setMessage(event.target.value);
  };

  const onRemove = (id) => {
    setUsers(users.filter((message) => message.id !== id));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (message === "") {
      return;
    }

    nextId.current += 1;
    const time = getDatetime();
    setUsers(
      users.concat({
        id: nextId.current,
        sender: "user",
        message: message,
        date: time,
      })
    );

    // const style = {
    //   justifyContents: "flex-start",
    // };

    if (message === "안녕") {
      // style = { style };
      nextId.current += 1;
      const time = getDatetime();
      setUsers((value) => [
        ...value,
        {
          id: nextId.current,
          sender: "bot",
          message: "안녕하세요, 만나서 반갑습니다.",
          date: time,
        },
      ]);
    }

    setMessage("");
  };

  window.scrollBy(0, window.innerHeight);

  return (
    <>
      <div id="chatBoxWrap">
        {users.map((item, index) => (
          <div className="chatUser">
            <FiX
              size="11px"
              className="onDeleteClick"
              onClick={() => onRemove(item.id)}
            ></FiX>
            {/* <span className="index">{item.id}</span> */}
            <span className="showTime">{item.date}</span>
            <span
              className="chatMessage"
              style={
                item.sender === "bot" ? { float: "left" } : { float: "right" }
              }
            >
              {item.message}
            </span>
          </div>
        ))}
      </div>

      {/* 언더바 레이아웃 및 이벤트 등록 */}
      <div className="underBar">
        <form onSubmit={onSubmit}>
          <input
            className="chat"
            type="text"
            value={message}
            placeholder="채팅을 입력하세요"
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </form>
        <AiOutlineArrowUp className="btnEnter" onClick={onSubmit} />
      </div>
    </>
  );
}

export default UnderBar;

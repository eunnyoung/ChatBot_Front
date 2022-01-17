import React, { useState } from "react";
import "./Footer.css";
import "./components/Chat.css";

function UnderBar() {
  const [doChat, setDoChat] = useState("");
  const [doChats, setDoChats] = useState([]);

  const onChange = (event) => setDoChat(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (doChat === "") {
      return;
    }

    setDoChats((currentArray) => [...currentArray, doChat]);
    setDoChat("");
  };
  return (
    <>
      {doChats.map((item, index) => (
        <div className="chatItem" key={index}>
          {item}
        </div>
      ))}
    </>
  );
}

export default UnderBar;

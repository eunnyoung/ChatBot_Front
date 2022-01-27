import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./UnderBar.css";

function UnderBar() {

  const [message, setMessage] = useState('');

 // const { sender , message } = user;

  const [users, setUsers] = useState([
    {
      sender:'',
      message:'',
      date:null,

    },
  ]);

  // 시간
  function getDatetime () {
    let date = new Date();
    let time = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
    return `${time.hours}:${time.minutes}:${time.seconds}`;
  }


  const onChange = (event) => {
    console.log(',,,,', message);
    setMessage(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (message === "") {
      return;
    }

    const time = getDatetime();
    setUsers(users.concat({
      sender:'user',
      message:message,
      date: time,
    }));

    setMessage(''
    );
    
  };

  window.scrollBy(0, window.innerHeight);

  return (
    <>
      <div id="chatBoxWrap">
        {users.map((item, index) => (
          <div className="chatUser" key={index}>
            <button className="onDeleteClick">삭제</button>
            {console.log("messs", item)}
            <span className="showTime">{item.date}</span>
            {item.message}
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

// import React, { useState } from "react";
// import { AiOutlineArrowUp } from "react-icons/ai";
// import "./UnderBar.css";

// function UnderBar() {
//   const [user, setUser] = useState("");
//   const [users, setUsers] = useState([]);

//   // 시간
//   const date = new Date();
//   const time = {
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds(),
//   };
//   const timeString = `${time.hours}:${time.minutes}:${time.seconds}`;

//   const nowTime = (props) => {
//     return timeString;
//   }

//   nowTime.props = {
//     time: timeString,
//   };

//   const onChange = (event) => setUser(event.target.value);

//   const onSubmit = (event) => {
//     event.preventDefault();

//     if (user === "") {
//       return;
//     }

//     setUsers((currentArray) => [...currentArray, user]);
//     setUser("");

//     if (user === "안녕") {
//       setUsers((currentArray) => [...currentArray, "안녕하세요, 반갑습니다."]);
//     } else if (user === "이름이 뭐야?") {
//       setUsers((currentArray) => [
//         ...currentArray,
//         "제 이름은 아직 정해지지 않았습니다.",
//       ]);
//     }
//   };

//   window.scrollBy(0, window.innerHeight);

//   return (
//     <>
//       <div id="chatBoxWrap">
//         {users.map((item, index) => (
//           <div className="chatUser" key={index}>
//             <button className="onDeleteClick">삭제</button>
//             {<span className="showTime">{timeString}</span>}
//             {item}
//           </div>
//         ))}
//       </div>

//       {/* 언더바 레이아웃 및 이벤트 등록 */}
//       <div className="underBar">
//         <form onSubmit={onSubmit}>
//           <input
//             className="chat"
//             type="text"
//             value={user}
//             placeholder="채팅을 입력하세요"
//             onChange={onChange}
//           />
//         </form>
//         <AiOutlineArrowUp className="btnEnter" onClick={onSubmit} />
//       </div>
//     </>
//   );
// }

// export default UnderBar;


// import React, { useState } from "react";
// import { AiOutlineArrowUp } from "react-icons/ai";
// import "./UnderBar.css";

// function UnderBar() {
//   const [user, setUser] = useState("");
//   const [users, setUsers] = useState([]);

//   // 시간
//   const date = new Date();
//   const time = {
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds(),
//   };
//   const timeString = `${time.hours}:${time.minutes}:${time.seconds}`;

//   const onChange = (event) => setUser(event.target.value);

//   const onSubmit = (event) => {
//     event.preventDefault();

//     if (user === "") {
//       return;
//     }

//     setUsers((currentArray) => [...currentArray, user]);
//     setUser("");

//     if (user === "안녕") {
//       setUsers((currentArray) => [...currentArray, "안녕하세요, 반갑습니다."]);
//     } else if (user === "이름이 뭐야?") {
//       setUsers((currentArray) => [
//         ...currentArray,
//         "제 이름은 아직 정해지지 않았습니다.",
//       ]);
//     }
//   };

//   window.scrollBy(0, window.innerHeight);

//   return (
//     <>
//       <div id="chatBoxWrap">
//         {users.map((item, index) => (
//           <div className="chatUser" key={index}>
//             <button className="onDeleteClick">삭제</button>
//             {<span className="showTime">{timeString}</span>}
//             {item}
//           </div>
//         ))}
//       </div>

//       {/* 언더바 레이아웃 및 이벤트 등록 */}
//       <div className="underBar">
//         <form onSubmit={onSubmit}>
//           <input
//             className="chat"
//             type="text"
//             value={user}
//             placeholder="채팅을 입력하세요"
//             onChange={onChange}
//           />
//         </form>
//         <AiOutlineArrowUp className="btnEnter" onClick={onSubmit} />
//       </div>
//     </>
//   );
// }

// export default UnderBar;


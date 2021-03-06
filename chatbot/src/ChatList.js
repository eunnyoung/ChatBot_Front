import React from "react";
import { FiX } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import "./ChatList.css";

const ChatList = (props) => {
    const nickName = props.nickName;

    return <div className="chatBoxWrap">
        {props.chats.map((item, index) => (
            <div
                className="chatArea"
                style={
                    item.sender !== nickName
                        ? {}
                        : { right: "-98%", transform: "translateX(-100%)" }
                        // : {}
                }
            >

                <div className="nickName"
                    style={
                        item.sender === nickName ? { display: "none" } : { alignItems: "flex-start" }
                    }
                >
                    {item.sender}
                </div>
                {/* 삭제 버튼 */}
                <FiX
                    size="11px"
                    className="onDeleteClick"
                    onClick={() => props.onRemove(item.id)}
                />
                {/* 챗봇 아이콘 */}
                <FaRobot
                    className="botIcon"
                    size="2rem"
                    style={
                        item.sender === 'bot' ? { float: "left" } : { display: "none" }
                    }
                />
                {/* 메시지 정렬 */}
                <div
                    className="chatMessage"
                    style={

                        item.sender !== nickName ? { float: "left" } : { float: "right" }
                    }
                    onLoad={function() { window.scrollBy(0, window.innerHeight)}}
                >

                    {item.isImage ? <img src={item.message} className="img" alt="파일첨부" /> : item.message}
                </div>
                {/* 사진 전용 메시지 창 */}
                {/* <span
                    className="img"
                    style={
                        item.isImage ? { float: "right"  } : { display: "none" }
                    }
                >
                <img src={item.message} alt="파일첨부" />
                </span> */}
                {/* 시간 정렬 */}
                <span
                    className="showTime"
                    style={
                        item.sender !== nickName ? { float: "left" } : { float: "right" }
                    }
                >
                    {item.date}
                </span>
            </div>
        ))}
    </div>
}

export default ChatList;
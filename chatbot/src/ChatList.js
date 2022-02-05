import React from "react";
import { FiX } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import "./ChatList.css";

const ChatList = (props) => {
    const nickName = props.nickName;

    return <div id="chatBoxWrap">
        {props.chats.map((item, index) => (
            <div
                className="chatUser"
                style={
                    item.sender !== nickName
                        ? {}
                        : { right: "-98%", transform: "translateX(-100%)" }
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
                <span
                    className="chatMessage"
                    style={
                        item.sender !== nickName ? { float: "left" } : { float: "right" }
                    }
                >

                    {item.isImage ? <img src={item.message} className="img" alt="파일첨부" /> : item.message}
                </span>
                <span>
                    {/* <img src={props.src} className="img" alt="파일첨부" style={{ maxHeight: "20px" }} /> */}
                </span>

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
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { FiArrowUp } from "react-icons/fi";
import React from "react";

function Footer() {
  return (
    <form
      css={css({
        display: "flex",
        background: "#3b5998",
        height: "3rem",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        alignItems: "center",
      })}
    >
      <input
        id="inputform"
        type="text"
        placeholder="채팅을 입력하세요"
        css={css({
          color: "white",
          flex: 1,
          marginLeft: 12,
          border: "none",
          background: "transparent",
          fontsize: "1.5em",
          "&:focus": { outline: "none" },
        })}
      ></input>

      <FiArrowUp
        css={css({
          display: "flex",
          flex: 1,
          position: "absolute",
          right: "1rem",
          color: "white",
          padding: "none",
        })}
      />
    </form>
  );
}

export default Footer;

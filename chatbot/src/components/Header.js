/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const Header = () => {
  return (
    <div
      css={css({
        background: "#3b5998",
        display: "flex",
        // banner의 패딩
        padding: 12,
        fontSize: "1.3em;",
        color: "white",
      })}
    >
      <FiChevronLeft size="1.5em" />
      <div
        css={css({
          display: "flex",
          justifyContent: "center",
          flex: 1,
          color: "white",
          alignItems: "center",
        })}
      >
        CHATBOT
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  height: 3rem;
  margin-top: -3rem;
  display: flex;
  position: sticky;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background: var(--black);
  color: var(--white);
  .boldBrand {
    font-family: nippori, sans-serif;
    font-weight: 400;
    font-size: 0.7rem;
  }
  .lightBrand {
    font-family: good-times, sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 0.8rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p className="center">
        <span className="boldBrand">Phoenix</span>{" "}
        <span className="lightBrand">
          Design &copy; {new Date().getFullYear()}
        </span>
      </p>
    </FooterStyles>
  );
}

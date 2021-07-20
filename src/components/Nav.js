import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  width: 100%;
  top: 0;
  height: 100px;
  background-color: var(--transparentBlack);
  transition: all 0.4s;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-left: 3rem;
  }

  .gatsby-image-wrapper {
    width: 100%;
    transition: all 0.4s;
  }

  a {
    &[aria-current="page"] {
      color: var(--black);
    }
  }
  a {
    color: var(--grey);
    transition: all 0.4s;
    &[aria-current="page"] {
      color: var(--white);
      font-weight: 700;
      &:hover {
        color: var(--white);
      }
    }
    &:hover {
      color: var(--red);
    }
  }
  &.shrink {
    height: 80px;
    background-color: var(--black);
    ul {
      margin: 0.5rem 0;
    }
    .gatsby-image-wrapper {
      width: 80%;
    }
  }
`;

export default function Nav() {
  const [shrinkNav, setShrinkNav] = useState(false);

  const scrolled = () => {
    if (window.scrollY >= 80) {
      setShrinkNav(true);
    } else {
      setShrinkNav(false);
    }
  };

  window.addEventListener("scroll", scrolled);

  return (
    <NavStyles className={shrinkNav ? "shrink" : ""}>
      <div className="container">
        <Link to="/">
          <StaticImage
            src="../images/logo-light.png"
            width={250}
            alt="Phoenix Design Logo"
            placeholder="tracedSVG"
          />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about">Who we are</Link>
          </li>
          <li>
            <Link to="#services">Services</Link>
          </li>
          <li>
            <Link to="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </NavStyles>
  );
}

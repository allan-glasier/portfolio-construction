import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Contact from "./Contact";

import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import Typewriter from "typewriter-effect";

const HeaderStyles = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .comingSoon {
    margin-bottom: 3rem;
  }
  .gatsby-image-wrapper {
    max-width: 500px;
  }
  .Typewriter {
    font-size: 1.5rem;
    margin-top: 2rem;
    span {
      font-family: good-times, sans-serif;
      font-weight: 300;
      font-style: normal;
    }
  }
  @media (max-width: 550px) {
    .gatsby-image-wrapper {
      max-width: 250px;
    }
    .Typewriter,
    .comingSoon {
      font-size: 1.1rem;
    }
  }
`;

const HeroBackgroundStyles = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background: rgba(28, 40, 55, 0.6);
  background-size: cover;
  background-position: center, center;
`;

export default function Header() {
  const { heroBackground } = useStaticQuery(
    graphql`
      query {
        heroBackground: file(relativePath: { eq: "heroBg.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, placeholder: BLURRED, width: 2000)
          }
        }
      }
    `
  );

  const heroBg = getImage(heroBackground);
  const bgImage = convertToBgImage(heroBg);

  return (
    <HeroBackgroundStyles tag="section" {...bgImage} preserveStackingContext>
      <HeaderStyles>
        <h2 className="comingSoon">New Site Coming Soon!</h2>
        <div className="brandDiv">
          <StaticImage
            src="../images/logo-light.png"
            alt="Phoenix Design Logo"
            placeholder="blurred"
          />

          <Typewriter
            options={{
              delay: 60,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("we build websites")
                .pauseFor(500)
                .deleteChars(8)
                .typeString("brands")
                .pauseFor(500)
                .deleteChars(6)
                .typeString("& user experiences")
                .start();
            }}
          />
        </div>
        <Contact />
      </HeaderStyles>
    </HeroBackgroundStyles>
  );
}

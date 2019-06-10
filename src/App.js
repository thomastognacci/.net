import React from "react";
import {ThemeProvider} from "styled-components";

import {theme} from "./styles/theme";
import {GlobalStyle} from "./styles/GlobalStyles";
import {StyledApp} from "./styles/StyledApp";
import {StyledBlockList} from "./styles/StyledBlockList";
import {StyledIntro} from "./styles/StyledIntro";
import Block from "./Block";

const App = ({className}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp className={className}>
        <GlobalStyle />
        <header>
          <svg xmlns="http://www.w3.org/2000/svg" width="32.579" height="31.775">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M16.289 0C7.294 0 0 7.294 0 16.291c0 7.197 4.667 13.302 11.141 15.457.814.148 1.112-.354 1.112-.785 0-.387-.014-1.412-.022-2.771-4.531.984-5.487-2.184-5.487-2.184-.741-1.881-1.809-2.383-1.809-2.383-1.479-1.01.112-.99.112-.99 1.635.115 2.495 1.68 2.495 1.68 1.453 2.488 3.812 1.77 4.741 1.354.148-1.053.569-1.771 1.034-2.178-3.617-.412-7.42-1.809-7.42-8.051 0-1.778.635-3.232 1.677-4.371-.167-.412-.727-2.068.16-4.311 0 0 1.368-.438 4.479 1.67a15.602 15.602 0 0 1 4.078-.549c1.384.006 2.776.188 4.078.549 3.11-2.108 4.476-1.67 4.476-1.67.889 2.242.329 3.898.162 4.311 1.043 1.139 1.674 2.593 1.674 4.371 0 6.258-3.809 7.635-7.438 8.038.585.504 1.105 1.498 1.105 3.018 0 2.178-.02 3.934-.02 4.469 0 .436.293.941 1.12.783 6.468-2.158 11.13-8.26 11.13-15.455C32.579 7.294 25.286 0 16.289 0z"
              clip-rule="evenodd"
            />
          </svg>
        </header>
        <StyledIntro>
          <h1>Hi, I'm Thomas</h1>
          <h2>
            Front-End Developer in the making<span className="blink">|</span>
          </h2>
          <span className="current-location">
            <img className="pin" src="/img/place.svg" alt="Current Location" /> Nice, France
          </span>
          <p className="intro-copy">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit voluptatem, provident
            tempora ipsa temporibus itaque iusto illo, minima officiis recusandae et quisquam in
            nulla similique ratione molestias neque doloribus?
          </p>
        </StyledIntro>
        <StyledBlockList>
          <Block title="frontEnd" accent={theme.color.purple}>
            <li>HTML</li>
            <li>CSS && SASS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Next.js</li>
          </Block>
          <Block title="back_end" accent={theme.color.yellow}>
            <li>Node.js</li>
            <li>PHP</li>
          </Block>
          <Block title="database" accent={theme.color.lightBlue}>
            <li>MySQL</li>
            <li>Cloud Firestore</li>
            <li>MongoDB</li>
          </Block>
        </StyledBlockList>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;

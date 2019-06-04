import React from "react";
import {ThemeProvider} from "styled-components";

import {theme} from "./styles/theme";
import {GlobalStyle} from "./styles/GlobalStyles";
import {StyledApp} from "./styles/StyledApp";
import {StyledBlockList} from "./styles/StyledBlockList";
import Block from "./Block";

const App = ({className}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp className={className}>
        <GlobalStyle />
        <header>Links go here</header>
        <div className="main-content">
          <h1>Hi, I'm Thomas</h1>
          <h2>
            Front-End Developer in the making<span className="blink">|</span>
          </h2>

          <p className="intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit voluptatem, provident
            tempora ipsa temporibus itaque iusto illo, minima officiis recusandae et quisquam in
            nulla similique ratione molestias neque doloribus?
          </p>
        </div>
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

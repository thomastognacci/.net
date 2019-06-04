import styled, {keyframes} from "styled-components";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

export const StyledApp = styled.div`
  min-height: 100vh;
  background: ${({theme}) =>
    `linear-gradient(to top right, ${theme.color.darkBlue}, ${theme.color.blue})`};
  color: ${({theme}) => theme.color.white};

  .main-content {
    font-size: 1.8em;
    padding: 5rem 10rem;
  }

  .intro {
    margin-top: 2em;
  }

  .blink {
    animation: ${blink} 1s step-start infinite;
  }
`;

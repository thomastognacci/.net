import styled, {keyframes} from "styled-components";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

export const StyledIntro = styled.div`
  font-size: 1.8em;
  padding: 5rem 10rem;

  .current-location {
    display: inline-block;
    margin-top: 0.5rem;
    opacity: 0.5;
    font-family: ${({theme}) => theme.font.heading};

    .pin {
      height: 1rem;
    }
  }

  .intro-copy {
    margin-top: 2em;
  }

  .blink {
    font-family: ${({theme}) => theme.font.heading};
    animation: ${blink} 1s step-start infinite;
  }
`;

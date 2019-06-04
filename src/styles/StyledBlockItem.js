import styled from "styled-components";

export const StyledBlockItem = styled.div`
  padding: 2em;

  flex: 1;
  font-family: ${({theme}) => theme.font.heading};

  div {
    height: 100%;
    border-radius: 3px;
    padding: 1.5em;
    background: ${({theme}) => theme.color.grey};
    box-shadow: ${({accent}) => `0px 0px 20px ${accent}80`};
  }

  h3 {
    font-size: 1.25em;
    color: ${({accent}) => accent};
    margin-bottom: 1em;
  }

  li {
    position: relative;
    line-height: 1.25;
    list-style: decimal-leading-zero;
    margin-left: 2em;

    &:after {
      content: "";
      position: absolute;
      background: ${({theme}) => theme.color.grey};
      height: 100%;
      width: 2em;
      left: 0;
      opacity: 0.85;
      transform: translateX(-100%);
    }
  }
`;

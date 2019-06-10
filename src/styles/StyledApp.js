import styled, {keyframes} from "styled-components";

export const StyledApp = styled.div`
  min-height: 100vh;
  background: ${({theme}) =>
    `linear-gradient(to top right, ${theme.color.darkBlue}, ${theme.color.blue})`};
  color: ${({theme}) => theme.color.white};

  .main-content {
    font-size: 1.8em;
    padding: 5rem 10rem;
  }
`;

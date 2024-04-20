import styled, { css } from 'styled-components'

const StyledButton = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: transparent;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  display: block;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: filter 0.5s;

   &:hover {
     filter: brightness(0.75);
   }

   &:active {
     filter: brightness(1);
   }

  ${props =>
    props.$primary &&
    css`
      background-color: #2b72fb;
      color: white;
      padding: 0.6rem 1.4rem;
      font-size: 1rem;
      font-weight: 500;
    `};
`


export default StyledButton;
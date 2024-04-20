import styled from 'styled-components';

const StyledNavigationWrapper = styled.menu`
    display: flex;
    align-items: center;
    column-gap: 15px;

    padding: 0.3rem;
    min-width: 60px;
    margin: 0 0.6rem;
    list-style: none;
`

const StyledNavigationItem = styled.li`
    transition: color 0.3s;
    &:hover {
        color: #2b72fb;
    }
`

const StyledNavigationLink = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.6px;
    padding: 0.3rem;
    min-width: 60px;
    margin: 0 0.6rem;

     &:hover {
        text-decoration: underline;
     }
`

export { StyledNavigationWrapper, StyledNavigationItem, StyledNavigationLink };


// const StyledCounter = styled.div`
//   /* ... */
// `;
// const Paragraph = styled.p`
//   /* ... */
// `;
// const Button = styled.button`
//   /* ... */
// `;
import styled from 'styled-components';

export const AccordionButton = styled.button`
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: background-color 0.4s;

    &:hover {
        background-color: #ccc;
    }

    &:after {
        content: "\\02795"; /* Unicode character for "plus" sign (+) */
        font-size: 13px;
        color: #777;
        float: right;
        margin-left: 5px;
    }

    &.active {
        background-color: #ccc;
        transition: all 0.4s ease-out;

        &:after {
            content: "\\2796"; /* Unicode character for "minus" sign (-) */
        }
    }
`;

export const AccordionPanel = styled.div`
    padding: 18px 18px;
    background-color: white;
    font-family: sans-serif;
    font-weight: 500;
`;

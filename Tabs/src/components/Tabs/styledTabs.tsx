import styled from 'styled-components';


const TabsWrapper = styled.div`
    background-color: #ccc;
    width: 600px;
    margin: 0 auto;
    transform: translateY(20vh);
    
    .tabs__list {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 20px;
        list-style: none;
    }

    .tabs__item {
        cursor: pointer;
    }

    .tabs__item.active {
        font-weight: bold;
    }

    .tabs__content {
        margin-top:100px;
        padding: 20px;
        text-align:center;
        border: 2px solid #000;
    }
`;

export { TabsWrapper }
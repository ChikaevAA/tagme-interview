import styled from "styled-components";

export const ButtonContainer = styled.button<{$square: boolean}>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    ${p => p.$square && "width: 40px"};
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    margin: 0;

    background: #FFF;
    border: 1px solid #F0F0F0;
    color: #0808088f;
    cursor: pointer;

    &:hover, &:active {
        border: 1px solid #E1E1E1;
        color: #080808;
    }

    &:active {
        background-color: #F0F0F0
    }
`;

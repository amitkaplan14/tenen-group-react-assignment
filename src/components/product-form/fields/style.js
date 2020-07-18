import styled from "styled-components";

export const FieldWrapper = styled.div`
    display: block;
    position: relative;
    padding: 20px 0px;
`;

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    height: 30px;
    padding: 0 15px;
`;

export const HideInput = styled.input`
    position: absolute;
    opacity: 0;
`;

export const StyledInput = styled.input`
    border: 1px solid black;
    height: 30px;
    width: 100%;
`;

export const RadioGridWrapper = styled.div`
    position: absolute;
    border: 1px solid black;
    width: 450px;
    display: flex;
    flex-direction: row;
    z-index: 100;
    background-color: #FFFFFF;
`;

export const RadioGridLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center
`;

export const FieldSelectWrapper = styled.select`
    border: 1px solid black;
    height: 30px;
    width: 100%;
`;

export const RadioImageLabel = styled.label`
    display: flex;
    align-items: center;
`;

export const RadioImageImg = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50px;
    padding: 2px;
    margin-right: 10px;
    ${({selected}) => selected && `
        border: 1px solid black;
  `}
`;



import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 500px;
    position: relative;
    // display: inline-block;
    margin: 30px;
`;

export const Slide = styled.div`
    display: none;
    
${({ active }) => active && `
    display: block;
  `}
`;

export const SlideBtn = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: ${props => props.next ? "3px 0 0 3px" : "0 3px 3px 0"};
  right: ${props => props.next ? "0" : "inherit"};
  user-select: none;
    
  ${({hide}) => hide && `
    display: none;
  `}
  
  &:hover {
    color: white;
    background-color: rgba(0,0,0,0.8);
  }
`;

export const Dot = styled.span`
  
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  
  &:hover {
    background-color: #717171;
    
    ${({active}) => active && `
    background-color: #717171;
  `}
`;
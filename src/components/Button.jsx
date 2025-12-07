import styled from "styled-components";

const Button = ({ onToggle }) => {
  return <ToggleButton onClick={onToggle}>Toggle Theme</ToggleButton>;
};

const ToggleButton = styled.button`
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
  border-radius: 8px;
  
`;

export default Button;

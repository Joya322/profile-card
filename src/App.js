import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import { lightTheme, darkTheme } from "./themes";
import Button from "./components/Button";

const StyledMain = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
`;
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <StyledMain>
        <Button onToggle={() => setIsDarkMode(!isDarkMode)} />
        <CardContainer>
          <Card />
        </CardContainer>
      </StyledMain>
    </ThemeProvider>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default App;

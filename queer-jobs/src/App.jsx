import styled from "styled-components";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
function App() {

  return (
    <Wrapper>
      <Header />
      <Home />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
`

export default App

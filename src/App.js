import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import Homescreen from "./Screens/Homescreen";

function App() {
  return (
   <>
   <Header/>
   <Container>
    <main>
      <Homescreen/>
    </main>
   </Container>
   <Footer/>
   </>
  );
}

export default App;

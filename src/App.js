import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";

import { Outlet } from "react-router-dom";

function App() {
  return (
   <>
   <Header/>
   <Container>
    <main>
     <Outlet/>
    </main>
   </Container>
   <Footer/>
   </>
  );
}

export default App;

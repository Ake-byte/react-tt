import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Registros from "./screens/Registros";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Registros />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;

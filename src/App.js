import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Registros from "./screens/Registros";
import Inicio from "./screens/Inicio";
import VerRegistro from "./screens/VerRegistro";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            {" "}
            <Route path="/" element={<Inicio />} exact />
            <Route path="/registros" element={<Registros />} />
            <Route path="/registro/:id" element={<VerRegistro />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

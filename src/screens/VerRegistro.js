import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";

function VerRegistro() {
  const match = useParams();
  //const registro = registros.find((r) => r._id === match.id);

  const [registro, setRegistro] = useState([]);

  useEffect(() => {
    async function fetchRegistro() {
      const { data } = await axios.get(`/api/registros/${match.id}`);
      setRegistro(data);
    }
    fetchRegistro();
  });
  return (
    <div>
      <Link to="/registros" className="btn btn-info my-3">
        Regresar
      </Link>
      <Card className="text-center">
        <h1>Registro</h1>
        <h3>{registro.nombre}</h3>
        <h3>{registro.descripcion}</h3>
      </Card>
    </div>
  );
}

export default VerRegistro;

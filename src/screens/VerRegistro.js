import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import registros from "../registros";

function VerRegistro() {
  const match = useParams();
  const registro = registros.find((r) => r._id === match.id);
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

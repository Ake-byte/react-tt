import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Registros() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    async function fetchRegistros() {
      const { data } = await axios.get("/api/registros/");
      setRegistros(data);
    }
    fetchRegistros();
  }, []);

  return (
    <div>
      <h1>Listado de Registros</h1>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Ver</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        {registros.map((r) => (
          <tbody key={r._id} sm={12} md={6} lg={4} xl={3}>
            <tr>
              <td>{r._id}</td>
              <td>{r.nombre}</td>
              <td>{r.descripcion}</td>
              <td>
                <Link to={`/registro/${r._id}`} className="btn btn-success">
                  Ver
                </Link>
              </td>
              <td>
                <Link to={`/registro/${r._id}`} className="btn btn-warning">
                  Editar
                </Link>
              </td>
              <td>
                <Link to={`/registro/${r._id}`} className="btn btn-danger">
                  Eliminar
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Registros;

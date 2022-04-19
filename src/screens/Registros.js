import React from "react";
import { Table } from "react-bootstrap";
import registros from "../registros";

function Registros() {
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
                <a href={`/registro/${r._id}`} className="btn btn-success">
                  Ver
                </a>
              </td>
              <td>
                <a href={`/registro/${r._id}`} className="btn btn-warning">
                  Editar
                </a>
              </td>
              <td>
                {" "}
                <a href={`/registro/${r._id}`} className="btn btn-danger">
                  Eliminar
                </a>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Registros;

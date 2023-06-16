import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Listar(){
    const [users, setUser] = useState([]);
 
    useEffect(() => {
      getUsers();
    }, []);
   
    const getUsers = async () => {
      const response = await axios.get("http://localhost:3200/obtenerRegistros");
      setUser(response.data);
    };
   
    const deleteUser = async (id) => {
      try {
        await axios.get(`http://localhost:3200/eliminarRegistro/${id}`);
        getUsers();
      } catch (error) {
        console.log(error);
      }
    };
   
    return (
      <div className="columns mt-5">
        <div className="column is-half">
          <Link to="add" className="button is-success">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth mt-2">
            <thead>
              <tr>
                <th>No</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Estado Civil</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.nombre}</td>
                  <td>{user.apellido}</td>
                  <td>{user.edad}</td>
                  <td>{user.estadoCivil?'Casado':'Soltero'}</td>
                  <td>
                    <Link
                      to={`../editar/${user._id}`}
                      className="button is-info is-small mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="button is-danger is-small"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Listar
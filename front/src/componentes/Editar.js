import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Editar() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);
    const [estadoCivil, setEstadoCivil] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:3200/obtenerRegistro/${id}`);
        setNombre(response.data.nombre);
        setApellido(response.data.apellido);
        setEdad(response.data.edad);
        setEstadoCivil(response.data.estadoCivil);
    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3200/editarRegistro/${id}`, {
                nombre,
                apellido,
                edad,
            });
            navigate("/listar");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="Nombre"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Apellido</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                placeholder="Apellido"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Edad</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={edad}
                                onChange={(e) => setEdad(e.target.value)}
                                placeholder="Edad"
                            />
                        </div>
                    </div>
                  
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success">
                                Actualizar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Editar
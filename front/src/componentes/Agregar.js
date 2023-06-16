import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Agregar() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);
    const [estadoCivil, setEstadoCivil] = useState();
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3200/agregarRegistro", {
                nombre,
                apellido,
                edad,
                estadoCivil,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5">
            <div className="column is-half">
                <form onSubmit={saveUser}>
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
                        <label className="label">Eadad</label>
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

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="estadoCivil" id="flexRadioDefault1" value="true" onChange={(e) => setEstadoCivil(e.target.value)}></input>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Casado
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="estadoCivil" id="flexRadioDefault2" value="false" checked onChange={(e) => setEstadoCivil(e.target.value)}></input>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Soltero
                            </label>
                        </div>
                    


                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success">
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Agregar
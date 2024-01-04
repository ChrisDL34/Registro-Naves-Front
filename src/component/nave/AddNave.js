import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";

function AddNave() {
    let navigate = useNavigate();
	const [nave, setNave] = useState({
		nombre: "",
		categoria: "",
		pais: "",
		color: "",
	});
    const {
		nombre,
		categoria,
		pais,
		color,
	} = nave;

    const handleInputChange = (e) => {
		setNave({
			...nave,
			[e.target.name]: e.target.value,
		});
	};
    const saveNave = async (e) => {
		e.preventDefault();
		await axios.post(
			"http://localhost:8080/naves",
			nave
		);
		navigate("/view-naves");
	};


  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
    <h2 className="mt-5"> Add Nave</h2>
    <form onSubmit={(e) => saveNave(e)}>
        <div className="input-group mb-5">
            <label
                className="input-group-text"
                htmlFor="nombre">
                Nombre
            </label>
            <input
                className="form-control col-sm-6"
                type="text"
                name="nombre"
                id="nombre"
                required
                value={nombre}
                onChange={(e) => handleInputChange(e)}
            />
        </div>

        <div className="input-group mb-5">
            <label
                className="input-group-text"
                htmlFor="categoria">
                Categoria
            </label>
            <input
                className="form-control col-sm-6"
                type="text"
                name="categoria"
                id="categoria"
                required
                value={categoria}
                onChange={(e) => handleInputChange(e)}
            />
        </div>

        <div className="input-group mb-5">
            <label
                className="input-group-text"
                htmlFor="pais">
                Pais
            </label>
            <input
                className="form-control col-sm-6"
                type="pais"
                name="pais"
                id="pais"
                required
                value={pais}
                onChange={(e) => handleInputChange(e)}
            />
        </div>

        <div className="input-group mb-5">
            <label
                className="input-group-text"
                htmlFor="color">
                Color
            </label>
            <input
                className="form-control col-sm-6"
                type="text"
                name="color"
                id="color"
                required
                value={color}
                onChange={(e) => handleInputChange(e)}
            />
        </div>

        <div className="row mb-5">
            <div className="col-sm-2">
                <button
                    type="submit"
                    className="btn btn-outline-success btn-lg">
                    Save
                </button>
            </div>

            <div className="col-sm-2">
                <Link
                    to={"/view-naves"}
                    type="submit"
                    className="btn btn-outline-warning btn-lg">
                    Cancel
                </Link>
            </div>
        </div>
    </form>
</div>
  )
}

export default AddNave
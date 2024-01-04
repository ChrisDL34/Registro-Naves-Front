import React, {useEffect,useState,} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditNave() {
    let navigate = useNavigate();
    const { id } = useParams();


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


    useEffect(() => {
		loadNave();
	}, []);

	const loadNave = async () => {
		const result = await axios.get(
			`http://localhost:8080/naves/nave/${id}`);
			setNave(result.data);
	};

    const handleInputChange = (e) => {
		setNave({
			...nave,
			[e.target.name]: e.target.value,
		});
	};
    const updateNave = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8080/naves/update/${id}`,
			nave
		);
		navigate("/view-naves");
	};


  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
    <h2 className="mt-5"> Editar Nave</h2>
    <form onSubmit={(e) => updateNave(e)}>
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

export default EditNave
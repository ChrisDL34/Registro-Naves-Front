import React, {useEffect,useState,} from "react";
import axios from "axios";
import {FaEdit,FaEye,FaTrashAlt,} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

function NavesView() {
    const [naves, setNaves] = useState([]);
	const [search, setSearch] = useState("");

    useEffect(() => {
		loadNaves();
	}, []);

	const loadNaves = async () => {
		const result = await axios.get(
			"http://localhost:8080/naves",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 302) {
			setNaves(result.data);
		}
	};



	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8080/naves/delete/${id}`
		);
		loadNaves();
	};


  return (
    <section>
     <Search
				search={search}
				setSearch={setSearch}
			/> 

    <table className="table table-bordered table-hover shadow">
        <thead>
            <tr className="text-center">
                <th>ID</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Pais</th>
                <th>Color</th>
                <th colSpan="3">Actions</th>
            </tr>
        </thead>

        <tbody className="text-center">
            {naves
                .filter((st) =>
                    st.nombre
                        .toLowerCase()
                        .includes(search)
                )
                .map((nave, index) => (
                    <tr key={naves.id}>
                        <th scope="row" key={index}>
                            {index + 1}
                        </th>
                        <td>{nave.nombre}</td>
                        <td>{nave.categoria}</td>
                        <td>{nave.pais}</td>
                        <td>{nave.color}</td>
                        <td className="mx-2">
                            <Link
                                to={`/nave-profile/${nave.id}`}
                                className="btn btn-info">
                                <FaEye />
                            </Link>
                        </td>
                        <td className="mx-2">
                            <Link
                                to={`/edit-nave/${nave.id}`}
                                className="btn btn-warning">
                                <FaEdit />
                            </Link>
                        </td>
                        <td className="mx-2">
                            <button
                                className="btn btn-danger"
                                onClick={() =>
                                    handleDelete(nave.id)
                                }>
                                <FaTrashAlt />
                            </button>
                        </td>
                    </tr>
                ))}
        </tbody>
    </table>
</section>
  )
}

export default NavesView
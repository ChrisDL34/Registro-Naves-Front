import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function NaveProfile() {

    const { id } = useParams();

	const [nave, setNave] = useState({
		nombre: "",
		categoria: "",
		pais: "",
		color: "",
	});

	useEffect(() => {
		loadNave();
	}, []);

	const loadNave = async () => {
		const result = await axios.get(
			`http://localhost:8080/naves/nave/${id}`
		);
		setNave(result.data);
	};


  return (
    <section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src={process.env.PUBLIC_URL + '/nave.png'}
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${nave.nombre} ${nave.categoria}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-primary">
										Info
									</button>
									<button
										type="button"
										className="btn btn-outline-warning ms-1">
										Contacto
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Nombre
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{nave.nombre}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Categoria
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{nave.categoria}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Pais
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{nave.pais}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Color
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{nave.color}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default NaveProfile
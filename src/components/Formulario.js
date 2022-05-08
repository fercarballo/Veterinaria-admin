import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  // crear State de citas
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  // funcion que se ejecuta cuando el user escribe en el input.
  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores desestructurando.
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // cuando el usuario envia formulario con el botón y reincimos el evento
  const submitCita = (e) => {
    e.preventDefault();

    // validamos los campos
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    // Eliminaremos el mensaje previo de err
    setError(false);

    // asignamos el ID para que react no cree problemas
    cita.id = uuidv4();
    console.log("cita");

    // creamos la cita
    crearCita(cita);

    //por ultimo reiniciamos el form una vez enviado
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>🐈Crear Cita🐕</h2>

      {error ? (
        <p className="alerta-error"> Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label htmlFor="mascota">Nombre Mascota</label>
        <input
          id="mascota"
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label htmlFor="">Nombre Dueño</label>
        <input
          id="mascota"
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={handleChange}
          value={propietario}
        />

        <label htmlFor="">Fecha</label>
        <input
          id="mascota"
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          id="mascota"
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label htmlFor="">Síntomas</label>
        <textarea
          id="mascota"
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-danger">
          Agregar Cita
        </button>
      </form>
    </>
  );
};
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;

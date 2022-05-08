import React, { useState, useEffect } from "react";
import "./index.css";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import Footer from "./components/Footer";

export default function App() {
  //citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo del conjunto de citas
  const [citas, setCitas] = useState(citasIniciales);

  //Use effect para realizar ciertas operaciones cuando el State cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  // función que va a tomar las citas actuales y agregará la nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  // función que elimina una cita por su ID
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  //mensaje condicional de citas vacias
  const titulo = citas.length === 0 ? "No existen citas" : "Gestiona tus citas";

  return (
    <>
      <h1>Administrador de Veterinaria</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
      <Footer />
    </div>
      
    </>
  );
}

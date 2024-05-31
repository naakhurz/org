import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const {registrarColaborador, crearEquipo} = props

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    };
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color});
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellenar el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingrese el nombre"
          required
          valor={nombre}
          setValor={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingrese el puesto"
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingrese URL de la foto"
          requiered
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones 
          valor={equipo} 
          setEquipo={setEquipo}
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellenar el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingrese titulo"
          required
          valor={titulo}
          setValor={setTitulo}
        />
        <Campo
          titulo="Color "
          placeholder="Ingresar el color en Hex"
          required
          valor={color}
          setValor={setColor}
          type="color"
        />
        <Boton>
          Registrar Equipo
        </Boton>
      </form>
    </section>
  );
};

export default Formulario;

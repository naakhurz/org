import "./ListaOpciones.css";

const ListaOpciones = (props) => {

  const manejarCambio = (e) => {
    props.setEquipo(e.target.value)
  }

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disable defaultValue="" hidden>
          Selecciona programación
        </option>
        {props.equipos.map((equipos, index) => (
          <option key={index}>{equipos}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;

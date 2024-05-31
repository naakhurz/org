import "./MiOrg.css";

const MiOrg = (props) => {

  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="./img/boton-add.png" alt="boton-agregar" onClick={props.cambiarMostrar}/>
    </section>
  );
};

export default MiOrg;

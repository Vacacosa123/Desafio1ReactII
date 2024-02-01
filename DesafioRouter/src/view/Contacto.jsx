

const Contacto = () => {
  return (
    <div><h2>Cuentanos en que te podriamos ayudar?</h2>
    <p>Correo:</p>
    <input
    type="text"
    className="form-control"
    placeholder="Ingresar Correo"
    />
    <p>Descripcion:</p>
    <input
    type="text"
    className="form-control"
    placeholder="Ingrese Descripcion"
    />
    <br/>
        <button type="submit" className="btn btn-danger">
    Enviar
    </button>
    </div>
  )
}

export default Contacto
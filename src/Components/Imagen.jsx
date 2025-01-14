function Imagen({ imagen, nombre, atributo }) {
  return (
    <>
    <div>
      <img src={imagen} alt="" />
      <h3>{nombre}</h3>
      <h4>{atributo}</h4>
    </div>
    </>
  );
}

export { Imagen };

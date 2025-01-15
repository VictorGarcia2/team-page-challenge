import { Imagen } from "./Imagen";

function Galeria() {
  return (
    <div className="Galeria">
      <div className="GaleriaIzq">
        <Imagen
          imagen="/photos/photo1.png"
          nombre={"Bill Mahoney"}
          atributo={"Dueño del producto"}
        />
        <div className="abajo">
        <Imagen
          
          imagen="/photos/photo3.png"
          nombre={"Shae Le"}
          atributo={"Líder tecnológico"}
        />
        </div>

        <Imagen
          imagen="/photos/photo5.png"
          nombre={"Griff Richards"}
          atributo={"Desarrollador"}
        />
      </div>
      <div className="GaleriaDer">
        <Imagen
          imagen="/photos/photo2.png"
          nombre={"Saba Cabrera"}
          atributo={"Directora de arte"}
        />
        <div className="abajo">
        <Imagen
          className="abajo"
          imagen="/photos/photo4.png"
          nombre={"Skylah Lu"}
          atributo={"Diseñadora UX"}
        />
        </div>
        <Imagen
          imagen="/photos/photo6.png"
          nombre={"Stan John"}
          atributo={"Desarrollador"}
        />
      </div>
    </div>
  );
}

export { Galeria };

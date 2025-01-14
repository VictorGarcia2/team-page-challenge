import { Imagen } from "./Imagen";

function Galeria() {
  return (
    <div className="Galeria">
      <div className="GaleriaIzq">
        <Imagen
          imagen="/src/assets/photos/photo1.png"
          nombre={"Bill Mahoney"}
          atributo={"Dueño del producto"}
        />
        <div className="abajo">
        <Imagen
          
          imagen="/src/assets/photos/photo3.png"
          nombre={"Shae Le"}
          atributo={"Líder tecnológico"}
        />
        </div>

        <Imagen
          imagen="/src/assets/photos/photo5.png"
          nombre={"Griff Richards"}
          atributo={"Desarrollador"}
        />
      </div>
      <div className="GaleriaDer">
        <Imagen
          imagen="/src/assets/photos/photo2.png"
          nombre={"Saba Cabrera"}
          atributo={"Directora de arte"}
        />
        <div className="abajo">
        <Imagen
          className="abajo"
          imagen="/src/assets/photos/photo4.png"
          nombre={"Skylah Lu"}
          atributo={"Diseñadora UX"}
        />
        </div>
        <Imagen
          imagen="/src/assets/photos/photo6.png"
          nombre={"Stan John"}
          atributo={"Desarrollador"}
        />
      </div>
    </div>
  );
}

export { Galeria };

import plant from "../../../assets/images/visuals/home-bg-section1.jpg";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/our-products"); 
  }
  return (
    <div className="section1">
      <div className="left">
        <div className="text">
          <h1>Transforma tus espacios en verdaderos oasis verdes</h1>
          <p>
            En Botanical creemos en potenciar cualquier espacio, llenándolo de
            vida y frescura. Con más de 20 años dedicados a la jardinería,
            ofrecemos una extensa selección de plantas de excelente calidad.
            Nuestro objetivo es ayudarte a encontrar la planta ideal para tu
            hogar, jardín o proyecto paisajístico.
          </p>
        </div>
        <div className="btn">
          <button className="btn-comprar" onClick={handleButtonClick}>Comprar Ahora</button>
        </div>
      </div>
      <div className="right">
        <img src={plant} alt="Planta" />
      </div>
    </div>
  );
};
export default Section1;

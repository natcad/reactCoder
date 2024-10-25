import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import EnlacesRapidos from "./EnlacesRapidos";
import tarjetas from "../../assets/images/visuals/tarjetas.png";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="info">
          <Logo />
          <ul>
            <li>Dirección: calle ficticia 1234, Ciudad, Pais </li>
            <li>Teléfono: 123-45678912</li>
            <li>Correo electrónico: botanical@email.com</li>
          </ul>
          <SocialMedia />
        </div>
        <div className="info">
          <EnlacesRapidos />
        </div>

        <div className="info">
          <h2>Horarios de atención</h2>
          <ul>
            <li>Lunes a Viernes: 9:00 AM - 6:00 PM </li>
            <li>Sábados: 9:00 AM - 2:00 PM</li>
            <li>Domingos: Cerrado </li>
          </ul>

          <h2>Trabajá con nosotros</h2>
          <p>Ponete en contacto por Email a info@mail.com adjuntando tu CV</p>
        </div>
      </div>
      <div className="bottom">
        <p>© 2024 Botanical. Todos los derechos reservados.</p>
        <div>
          <img src={tarjetas} alt="tarjetas aceptadas" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;

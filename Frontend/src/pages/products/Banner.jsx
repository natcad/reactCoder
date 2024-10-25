import banner from "../../assets/images/visuals/banner-productList.jpg";
const Banner = () => {
  return (
    <div className="banner">
      <h1>Embellecemos tu mundo</h1>
      <div className="img-container">
        <img src={banner} alt="planta" />
      </div>
    </div>
  );
};
export default Banner;

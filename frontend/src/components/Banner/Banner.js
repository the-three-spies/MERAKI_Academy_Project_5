import "./banner.css";
// need bg + h
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="banner-banner">
          <h1 className="banner-banner-title">Fitrat Insan For Donation</h1>
        </div>
        <img
          className="banner-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0N01pf13TjrY524osbD9Cy_o1EVmrWhMyOQ&usqp=CAU"
          alt="img"
        />
      </div>
    </div>
  );
};
export default Banner;

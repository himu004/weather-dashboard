import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div>
      <a href="#">
        <img className="h-9" src={logo} alt="Weather App" />
      </a>
    </div>
  );
};

export default Logo;

import Navbar from "./Navbar";

const Header = () => {
  return (
    <section id="main">
      <Navbar />
      <div className="name">
        <h2>STEPUP YOUR</h2>
        <h1>
          FITNESS <span>WITH US</span>
        </h1>
        <p className="details">
          Build Your Body & Fitness with Professional Touch.{" "}
        </p>
        <div className="header-btns">
          <a hef="#" className="header-btn">
            JOIN US
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;

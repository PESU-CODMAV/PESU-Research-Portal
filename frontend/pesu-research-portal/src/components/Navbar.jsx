import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-sky-800 text-white flex justify-between items-center cursor-pointer font-bold text-xl">
        <div className="bg-white border-sky-800 rounded-r-full p-10">
          <img
            className=""
            src="https://research.pes.edu/wp-content/uploads/2023/03/PESU-new-logo.png"
            alt=""
          />
        </div>
        <div>
          <Link to={"/centres"}>Centres</Link>
        </div>
        <div>
          <Link to="/professors">Faculty</Link>
        </div>
        <div>
          <Link>Research-Scholar</Link>
        </div>
        <div>
          <Link>Patents</Link>
        </div>
        <div>
          <Link to={"/conference-journel"}>Conference and Journal</Link>
        </div>
        <div>
          <Link>Monetary Resources</Link>
        </div>
        <div>
          <Link>Community</Link>
        </div>
        <div>
          <Link>Research Support</Link>
        </div>
        <div className="p-4">
          <Link to="/login">login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

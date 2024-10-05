import "../App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPublicationsDropdown, setShowPublicationsDropdown] =
    useState(false);
  const [showCentresDropdown, setShowCentresDropdown] = useState(false);
  function getCookieValue(cookieName) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    if (parts.length === 2) {
      const cookieValue = parts.pop().split(";").shift();
      return cookieValue;
    }
    return null;
  }

  useEffect(() => {
    const tokenFromCookie = getCookieValue("auth");
    if (tokenFromCookie) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <div className="">
      <div className="bg-sky-800 text-white flex justify-between gap-2 items-center cursor-pointer font-bold text-lg">
        <div className="bg-white border-sky-800 rounded-r-full p-10">
          <a href="/">
            <img
              className=""
              src="https://research.pes.edu/wp-content/uploads/2023/03/PESU-new-logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="relative group z-10">
          <div
            onMouseEnter={() => setShowCentresDropdown(true)}
            onMouseLeave={() => setShowCentresDropdown(false)}
            className="inline-block hover:scale-125 transition-transform duration-200 p-4"
          >
            Centres
          </div>
          <div
            className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${
              showCentresDropdown
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            onMouseEnter={() => setShowCentresDropdown(true)}
            onMouseLeave={() => setShowCentresDropdown(false)}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                to="/centres/rr"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                role="menuitem"
              >
                RR Campus
              </Link>
              <Link
                to="/centres/ec"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                role="menuitem"
              >
                EC Campus
              </Link>
            </div>
          </div>
        </div>
        <div>
          <a
            href="/professors"
            className="inline-block hover:scale-125 transition-transform duration-200 p-4"
          >
            Faculty
          </a>
        </div>
        <div>
          <a
            href="/rprogram"
            className="inline-block hover:scale-125 transition-transform duration-200 p-4"
          >
            PHD Program
          </a>
        </div>
        <div>
          <a
            href="/patent-process"
            className="inline-block hover:scale-125 transition-transform duration-200 p-4"
          >
            Patents
          </a>
        </div>
        <div>
          <a
            href="/Research-Grant"
            className="inline-block hover:scale-125 transition-transform duration-200 p-4"
          >
            Research-Grant
          </a>
        </div>
        <div className="relative group z-10">
          <div
            onMouseEnter={() => setShowPublicationsDropdown(true)}
            onMouseLeave={() => setShowPublicationsDropdown(false)}
            className="inline-block hover:scale-125 transition-transform duration-200 p-4"
          >
            Publications
          </div>
          <div
            className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${
              showPublicationsDropdown
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            onMouseEnter={() => setShowPublicationsDropdown(true)}
            onMouseLeave={() => setShowPublicationsDropdown(false)}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                to="/conference"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                role="menuitem"
              >
                Conferences
              </Link>
              <Link
                to="/journals"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                role="menuitem"
              >
                Journals
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link
            to={"/ethics"}
            className="inline-block hover:scale-125 transition-transform duration-200 p-4"
          >
            Ethics
          </Link>
        </div>
        <div>
          <a
            href="/research-support"
            className="inline-block hover:scale-125 transition-transform duration-200 p-4"
          >
            Research Support
          </a>
        </div>
        <div>
          <a
            href="/Contact"
            className="inline-block hover:scale-125 transition-transform duration-200 p-4"
          >
            Collaborations
          </a>
        </div>
        <div>
          <a
            href="/Contact"
            className="inline-block hover:scale-125 transition-transform duration-200 p-4"
          >
            Contact Us
          </a>
        </div>
        <div className="p-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="inline-block hover:scale-125 transition-transform duration-200 p-4"
            >
              Logout
            </button>
          ) : (
            <a href="/login">login</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

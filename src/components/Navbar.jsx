import "../index.css";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-100/50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 ">
        <div className="navbar py-3">
          {/* LEFT */}
          <div className="navbar-start">
            <a className="text-2xl font-bold text-indigo-600">TextCraft</a>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1 text-sm">
              <li>
                <a className="font-semibold text-indigo-600">Home</a>
              </li>

              <li>
                <a>Features</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end">
            <button className="btn btn-primary rounded-full px-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

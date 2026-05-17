
import "../index.css";
const Footer = () => {
    return (
      <footer className="  bg-[#f0f3ff]">
        <div className=" footer sm:footer-horizontal  text-base-content p-10 container-custom">
          <aside>
            <div className="navbar-start">
              <a className="text-2xl font-bold text-indigo-600">TextCraft</a>
            </div>
            <p>© 2024 TextCraft. Minimalist tools for modern students.</p>
          </aside>
          <div className="flex justify-between gap-2 lg:gap-10">
            <a href="#" className="hover:text-[#4232d1]">
              <h6 className="footer-title">Privacy Policy</h6>
            </a>
            <a href="#" className="hover:text-[#4232d1]">
              <h6 className="footer-title">Terms of Service</h6>
            </a>
            <a href="#" className="hover:text-[#4232d1]">
              <h6 className="footer-title">Help Center</h6>
            </a>
            <a href="#" className="hover:text-[#4232d1]">
              <h6 className="footer-title">Contact Us</h6>
            </a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;

import "../index.css";
const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal bg-[#f0f3ff] text-base-content p-10">
        <aside>
          <div className="abar-start">
            <a className="text-2xl font-bold text-indigo-600">TextCraft</a>
          </div>
          <p>© 2024 TextCraft. Minimalist tools for modern students.</p>
        </aside>
        <div className="flex justify-between gap-10">
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
      </footer>
    );
};

export default Footer;
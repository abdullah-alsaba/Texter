import "../index.css";
import { PiLightningBold } from "react-icons/pi";
import { MdOutlineDraw } from "react-icons/md";
import { MdDevices } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";


const Details = () => {
  return (
    <div className="bg-[#fafaff]">
      <div className=" py-30 container-custom">
        <div className="text-center space-y-2 mb-12">
          <h1 className="font-bold text-4xl">Why Students Choose TextCraft</h1>
          <p>
            The fastest way to clean and format your academic papers and notes.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto px-4 max-w-7xl">
          <div className="bg-white border border-[#D9D9E8] shadow-lg rounded-2xl p-8 w-full lg:w-auto">
            <div className="space-y-6">
              <div className="w-fit bg-[#ededfc] p-4 rounded-2xl hover:bg-[#4F46E5] transition-all duration-300 cursor-pointer group">
                <PiLightningBold className="text-[#4232d1] text-3xl group-hover:text-white transition-all duration-300" />
              </div>
              <h1 className="text-xl font-bold">Lightning Fast</h1>
              <p>
                Format your text instantly in the browser. No server calls, no
                lag, just results.
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#D9D9E8] shadow-lg  rounded-2xl p-8 w-full lg:w-auto">
            <div className="space-y-6">
              <div className="w-fit bg-[#ededfc] p-4 rounded-2xl  hover:bg-[#4F46E5] transition-all duration-300 cursor-pointer group">
                <MdOutlineDraw className="text-[#4232d1] text-3xl group-hover:text-white transition-all duration-300 " />
              </div>
              <h1 className="text-xl font-bold">Ship</h1>
              <p>
                A minimalist interface that respects your focus and reduces
                digital eye-strain.
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#D9D9E8] shadow-lg  rounded-2xl p-8 w-full lg:w-auto">
            <div className="space-y-6">
              <div className="w-fit bg-[#ededfc] p-4 rounded-2xl  hover:bg-[#4F46E5] transition-all duration-300 cursor-pointer group">
                <MdDevices className="text-[#4232d1] text-3xl group-hover:text-white transition-all duration-300" />
              </div>
              <h1 className="text-xl font-bold">Responsive</h1>
              <p>
                Works perfectly on your tablet, phone, or desktop. Format on the
                go.
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#D9D9E8] shadow-lg  rounded-2xl p-8 w-full lg:w-auto">
            <div className="space-y-6">
              <div className="w-fit bg-[#ededfc] p-4 rounded-2xl  hover:bg-[#4F46E5] transition-all duration-300 cursor-pointer group">
                <FaRegCheckCircle className="text-[#4232d1] text-3xl group-hover:text-white transition-all duration-300" />
              </div>
              <h1 className="text-xl font-bold">Responsive</h1>
              <p>
                Works perfectly on your tablet, phone, or desktop. Format on the
                go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

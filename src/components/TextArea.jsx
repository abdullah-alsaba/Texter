import "../index.css";
import {
  ChevronUp,
  ChevronDown,
  Trash2,
  Copy,
  AlignJustify,
} from "lucide-react";
import { FaAlignLeft } from "react-icons/fa6";


const TextArea = () => {
  return (
    <div className="py-20 bg-[#fafaff]">
      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl container-custom p-6">
        {/* Textarea */}
        <textarea
          className="w-full h-48 p-4 border border-gray-200 rounded-xl outline-none
          focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100
          text-gray-700 placeholder-gray-400 resize-none"
          placeholder="Write your text here..."
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#3525cc] bg-[#f0f3ff] hover:bg-[#3525cc] hover:text-white transition-all duration-300">
            <ChevronUp size={16} />
            Convert to Uppercase
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#3525cc] bg-[#f0f3ff] hover:bg-[#3525cc] hover:text-white transition-all duration-300">
            <ChevronDown size={16} />
            Convert to Lowercase
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#3525cc] bg-[#f0f3ff] hover:bg-[#3525cc] hover:text-white transition-all duration-300">
            <Trash2 size={16} />
            Clear Text
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#3525cc] bg-[#f0f3ff] hover:bg-[#3525cc] hover:text-white transition-all duration-300">
            <Copy size={16} />
            Copy Text
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#3525cc] bg-[#f0f3ff] hover:bg-[#3525cc] hover:text-white transition-all duration-300">
            <FaAlignLeft size={16} />
            Remove Extra Spaces
          </button>
        </div>
        <div>
          <div>helllo world</div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;

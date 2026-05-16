import { useState } from "react";
import "../index.css";
import { ChevronUp, ChevronDown, Trash2, Copy } from "lucide-react";
import { FaAlignLeft } from "react-icons/fa6";

const TextArea = () => {
  const [text, setText] = useState("");

  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  const handelUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handelClearText = () => {
    setText("");
  };

  const handelCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/\s+/).join(" ").trim();
    setText(newText);
  };

  return (
    <div className="py-20 bg-[#fafaff]">
      <div className="container-custom">
        {/* Main Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          {/* Textarea */}
          <textarea
            className="w-full h-52 p-5 border border-gray-200 rounded-2xl outline-none
            focus:border-[#4F46E5] focus:ring-4 focus:ring-indigo-100
            text-gray-700 placeholder-gray-400 resize-none transition-all duration-300"
            placeholder="Write your text here..."
            value={text}
            onChange={handelOnChange}
          />

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#4F46E5] bg-[#EEF2FF] hover:bg-[#4F46E5] hover:text-white transition-all duration-300 cursor-pointer"
              onClick={handelUpCase}
            >
              <ChevronUp size={16} />
              Convert to Uppercase
            </button>

            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#4F46E5] bg-[#EEF2FF] hover:bg-[#4F46E5] hover:text-white transition-all duration-300 cursor-pointer"
              onClick={handelLowCase}
            >
              <ChevronDown size={16} />
              Convert to Lowercase
            </button>

            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#4F46E5] bg-[#EEF2FF] hover:bg-[#4F46E5] hover:text-white transition-all duration-300 cursor-pointer"
              onClick={handelClearText}
            >
              <Trash2 size={16} />
              Clear Text
            </button>

            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#4F46E5] bg-[#EEF2FF] hover:bg-[#4F46E5] hover:text-white transition-all duration-300 cursor-pointer"
              onClick={handelCopyText}
            >
              <Copy size={16} />
              Copy Text
            </button>

            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#4F46E5] bg-[#EEF2FF] hover:bg-[#4F46E5] hover:text-white transition-all duration-300 cursor-pointer"
              onClick={handleRemoveSpaces}
            >
              <FaAlignLeft size={14} />
              Remove Extra Spaces
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
            <div className="border border-gray-100 rounded-2xl py-7 px-4 text-center bg-white shadow-sm">
              <h1 className="font-bold text-[#4F46E5] text-3xl">0</h1>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Word Count
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl py-7 px-4 text-center bg-white shadow-sm">
              <h1 className="font-bold text-[#4F46E5] text-3xl">0</h1>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Character Count
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl py-7 px-4 text-center bg-white shadow-sm">
              <h1 className="font-bold text-[#4F46E5] text-3xl">0.0 min</h1>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Reading Time
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-8 border-gray-100" />

          {/* Live Preview */}
          <div>
            <h1 className="font-bold text-2xl text-gray-800 mb-5">
              Live Preview
            </h1>

            <div className="bg-[#F5F7FF] rounded-2xl h-52 border border-indigo-50">
              <p className="p-6 italic text-sm text-gray-400">
                Nothing to preview
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;

import "../index.css";

const TextArea = () => {
    return (
      <div className="py-20 bg-[#fafaff]">
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl container-custom">
          <textarea
            className="w-full h-48 p-4 mx-auto m-8 border border-gray-200 rounded-xl outline-none 
  focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 
  text-gray-700 placeholder-gray-400 resize-none"
            placeholder="Write your text here..."
          />
          <div className=" mb-8">
            <button className="btn rounded-full px-8 text-[#3525cc] bg-[#f0f3ff] border-none">
              Learn More
            </button>
            <button className="btn rounded-full px-8 text-[#3525cc] bg-[#f0f3ff] border-none">
              Learn More
            </button>
            <button className="btn rounded-full px-8 text-[#3525cc] bg-[#f0f3ff] border-none">
              Learn More
            </button>
            <button className="btn rounded-full px-8 text-[#3525cc] bg-[#f0f3ff] border-none">
              Learn More
            </button>
            <button className="btn rounded-full px-8 text-[#3525cc] bg-[#f0f3ff] border-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
};

export default TextArea;

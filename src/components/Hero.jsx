import "../index.css";

const Hero = () => {
  return (
    <div className="bg-[#fafaff] py-20">
      <div className="container-custom">
        <div className="text-center">
          {/* TEXT CONTENT */}
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold leading-tight">
              Simple Text Utility App
            </h1>

            <p className="py-6 text-lg text-gray-600">
              Minimize cognitive load and maximize productivity with our clean,
              student-centric text transformation tools. Digital stationary
              designed for modern workflows.
            </p>

            {/* BUTTONS */}
            <div className="space-x-5">
              <button className="btn btn-primary rounded-full px-8">
                Try Now
              </button>

              <button className="btn rounded-full px-8 text-[#3525cc] bg-[#f0f3ff] border-none">
                Learn More
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="mt-14">
            <img
              src="/hero.png"
              alt="Hero UI"
              className="max-w-5xl w-full mx-auto rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

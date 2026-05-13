import "../index.css";

const Hero = () => {
  return (
    <div className=" bg-[#fafaff]">
      <div className="hero min-h-screen container-custom">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Simple Text Utility App</h1>
            <p className="py-6">
              Minimize cognitive load and maximize productivity with our clean,
              student-centric text transformation tools. Digital stationary
              designed for modern workflows.
            </p>
            <div className="space-x-5">
              <button className="btn btn-primary rounded-full p-6">
                Try Now
              </button>
              <button className="btn rounded-full p-6 text-[#3525cc] bg-[#f0f3ff]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

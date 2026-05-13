import "../index.css";
import { IoCodeSharp, IoRocketOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";

const Details = () => {
  return (
    <div className=" py-30 container-custom">
      <div className="text-center space-y-2 mb-12">
        <h1 className="font-bold text-4xl">Engineered for Velocity</h1>
        <p>Everything you need to move from idea to production in minutes.</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-2xl p-8 w-full lg:w-auto">
          <div className="space-y-6">
            <div className="w-fit bg-[#ededfc] p-4 rounded-2xl">
              <IoCodeSharp className="text-[#4648d4] text-3xl" />
            </div>
            <h1 className="text-xl font-bold">Code</h1>
            <p>
              Write cleaner code with built-in linting, automated refactoring,
              and local environment parity that works out of the box.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 w-full lg:w-auto">
          <div className="space-y-6">
            <div className="w-fit bg-[#d6f1ff] p-4 rounded-2xl">
              <IoRocketOutline className="text-[#006691] text-3xl " />
            </div>
            <h1 className="text-xl font-bold">Ship</h1>
            <p>
              Continuous delivery that doesn't break. Automate your CI/CD
              pipelines with simple YAML configurations and instant rollbacks.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 w-full lg:w-auto">
          <div className="space-y-6">
            <div className="w-fit bg-[#f7efe6] p-4 rounded-2xl">
              <IoMdTrendingUp className="text-[#8f4700] text-3xl" />
            </div>
            <h1 className="text-xl font-bold">Scale</h1>
            <p>
              Autoscale your infrastructure based on real-time traffic. Monitor
              performance metrics with granular observability dashboards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

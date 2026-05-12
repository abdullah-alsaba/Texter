import "../index.css";

const FAQ = () => {
  return (
    <div className="bg-[#f2f5ff] py-20">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>

      {/* FAQ Container */}
      <div className="max-w-3xl mx-auto space-y-4">
        {/* FAQ Item */}
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-white rounded-2xl border border-gray-200"
        >
          <div className="collapse-title text-lg font-semibold">
            What makes DevScale different from other CI/CD tools?
          </div>

          <div className="collapse-content text-gray-600">
            <p>
              DevScale integrates local development environments directly with
              your production infrastructure.
            </p>
          </div>
        </div>

        {/* FAQ Item */}
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-white rounded-2xl border border-gray-200"
        >
          <div className="collapse-title text-lg font-semibold">
            Can I migrate my existing projects to DevScale easily?
          </div>

          <div className="collapse-content text-gray-600">
            <p>
              Yes, DevScale supports smooth migration for existing projects.
            </p>
          </div>
        </div>

        {/* FAQ Item */}
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-white rounded-2xl border border-gray-200"
        >
          <div className="collapse-title text-lg font-semibold">
            Is DevScale SOC2 compliant?
          </div>

          <div className="collapse-content text-gray-600">
            <p>Yes, DevScale follows SOC2 compliance standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

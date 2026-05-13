import "../index.css";

const FAQ = () => {
  return (
    <div className="container-custom py-20">
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
            Is TextCraft free to use?
          </div>
        </div>

        {/* FAQ Item */}
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-white rounded-2xl border border-gray-200"
        >
          <div className="collapse-title text-lg font-semibold">
            Is my text private?
          </div>
        </div>

        {/* FAQ Item */}
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-white rounded-2xl border border-gray-200"
        >
          <div className="collapse-title text-lg font-semibold">
            Are there word limits?
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-white rounded-2xl border border-gray-200"
        >
          <div className="collapse-title text-lg font-semibold">
            Can I use this on mobile?
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;


const Banner = () => {
  return (
    <div className="bg-white rounded-lg flex justify-between items-center shadow-md p-5 mb-8 h-[9rem]">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Frontend Developer</h1>
        <p className="text-gray-600 mt-2">
          Step by step guide to becoming a modern frontend developer in 2024
        </p>
      </div>
      <a
        href="/dashboard"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
      >
        Go to Dashboard
      </a>
    </div>
  );
};

export default Banner;
  
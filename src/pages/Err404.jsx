import NotFound404 from '../assets/imgs/404.png'

const Err404 = () => {
  return (
    <div className="bg-indigo-900 relative -z-10 overflow-hidden h-screen">
      <img
        src={NotFound404}
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-8xl text-center text-white leading-tight mt-4">
          Are you 🏳️‍🌈?
          </h1>
          <p className="font-extrabold text-9xl my-20 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default Err404;

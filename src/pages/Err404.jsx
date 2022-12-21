import NotFound404 from '../assets/imgs/404.png'
import { Link } from 'react-router-dom';

const Err404 = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src={NotFound404}
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            What do you search?
          </h1>
          <Link className='text-5xl text-center text-blue-800 mt-10' to="/">Go Home</Link>
          <p className="font-extrabold text-8xl my-20 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default Err404;

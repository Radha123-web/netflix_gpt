

const VedioTitle = ({title,overview}) => {
              return (
              <div className=" w-screen aspect-video pt-[12%] px-24 absolute text-white ">
             <h1 className="text-6xl font-bold">{title}</h1>
             <p className="py-6 text-lg w-1/4">{overview}</p>
             <div className="">
              <button className="bg-white  mx-2 text-black p-4 px-12 w-40 text-xl rounded-lg hover:bg-opacity-80">
               Play
               </button>
              <button className="bg-gray-600 text-white p-4 px-12 w-40 text-xl bg-opacity-50 hover:bg-opacity-80 rounded-lg">
               MoreINfo
              </button>
             </div>
              </div>
              );
};

export default VedioTitle;

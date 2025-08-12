import { IoArrowForward } from "react-icons/io5"

const about = () => {
  return (
    <div  id="About" className="bg-gray-500 text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center  shadow-xl
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
        <div className="">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img className="md:h-80" src="" alt="" />
                <ul>
                     <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Programming language</h1>
                            <p className="text-sm md:text-md leading-tight">Java, Javascript, Python </p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                            <p className="text-sm md:text-md leading-tight">HTML ,CSS (Tailwind CSS) ,JavaScript (React)</p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Cyber Security</h1>
                            <p className="text-sm md:text-md leading-tight">Cisco Packet Tracer </p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Database Management</h1>
                            <p className="text-sm md:text-md leading-tight">Mysql , MongoDB</p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default about
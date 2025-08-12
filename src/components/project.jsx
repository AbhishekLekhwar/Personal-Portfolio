import { IoArrowForward } from "react-icons/io5"
const project = () => {
  return (
    <>
    <div id="Project" className=" bg-gray-500 bg-opacity-30 md:m-10 max-w-full mb-5">
        <div className="grid justify-items-center m-10">
            <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>
        <div>
            <div className=" sm:grid grid-cols-2 gap-4 p-5">
                <div className="max-w-sm mx-auto  rounded-xl 
                shadow-md overflow-hidden hover:animate-pulse md:max-w-2xl bg-black ">
                <div className="sm:flex"> 
                    <div className="p-8"> 
                        <div className="uppercase tracking-wide to-indigo-500 
                        font-semibold text-md text-white ">TO-DO ALERT</div>
                        <div className="text-white">HTML,Tailwind CSS , React JS </div>
                            <a target="_blank" href="https://github.com/AbhishekLekhwar/ToDo.git" className="text-slate-300 p-1 rounded-2xl px-2 flex gap-1 items-center text-sm"> View Project <IoArrowForward size={20} className="mt-1"/></a>
                        <p className="mt-2 text-slate-500">TO-Do Alert Project not a simple to-do list webpage,because in this project i add some additional feature sach as reminder alarm,add task,delete task,update task,view task.In this project we can set reminder againgst date and time and also we can set alarm for reminder.</p>
                    </div>
                </div>
                </div>
                <div className="max-w-sm mx-auto  rounded-xl 
                shadow-md overflow-hidden hover:animate-pulse md:max-w-2xl mt-2 sm:mt-0  bg-black">
                <div className="md:flex "> 
                    <div className="p-8"> 
                        <div className="uppercase tracking-wide to-indigo-500 
                        font-semibold text-md text-white">Chat-App</div>
                       <div className="text-white">HTML,Tailwind CSS , React JS </div>
                            <a target="_blank" href="https://github.com/AbhishekLekhwar/Chat-App.git" className="text-slate-300 p-1 rounded-2xl px-2 flex gap-1 items-center text-sm"> View Project <IoArrowForward size={20} className="mt-1"/></a>
                        <p className="mt-2 text-slate-500">TO-Do Alert Project not a simple to-do list webpage,because in this project i add some additional feature sach as reminder alarm,add task,delete task,update task,view task.In this project we can set reminder againgst date and time and also we can set alarm for reminder.</p>
                    </div>
                </div>
                </div>
            </div>
            <hr/>
            <div className="sm:grid grid-cols-2 gap-4 p-5">
                <div className="max-w-sm mx-auto  rounded-xl 
                shadow-md overflow-hidden hover:animate-pulse md:max-w-2xl bg-black">
                <div className="md:flex "> 
                    <div className="p-8"> 
                        <div className="uppercase tracking-wide to-indigo-500 
                        font-semibold text-md text-white">Password Manager</div>
                        <div className="text-white">HTML,Tailwind CSS , React JS </div>
                            <a target="_blank" href="https://github.com/AbhishekLekhwar/passcode.git" className="text-slate-300 p-1 rounded-2xl px-2 flex gap-1 items-center text-sm"> View Project <IoArrowForward size={20} className="mt-1"/></a>
                         <p className="mt-2 text-slate-500">TO-Do Alert Project not a simple to-do list webpage,because in this project i add some additional feature sach as reminder alarm,add task,delete task,update task,view task.In this project we can set reminder againgst date and time and also we can set alarm for reminder.</p>
                    </div>
                </div>
                </div>
                <div className="max-w-sm mx-auto  rounded-xl 
                shadow-2xl overflow-hidden hover:animate-pulse md:max-w-2xl mt-2 sm:mt-0 bg-black">
                <div className="md:flex "> 
                    <div className="p-8"> 
                        <div className="uppercase tracking-wide to-indigo-500 
                        font-semibold text-md text-white">PahadiStay</div>
                       <div className="text-white">HTML,Tailwind CSS , React JS </div>
                            <a target="_blank" href="https://github.com/AbhishekLekhwar/passcode.git" className="text-slate-300 p-1 rounded-2xl px-2 flex gap-1 items-center text-sm"> View Project <IoArrowForward size={20} className="mt-1"/></a>
                        <p className="mt-2 text-slate-500">TO-Do Alert Project not a simple to-do list webpage,because in this project i add some additional feature sach as reminder alarm,add task,delete task,update task,view task.In this project we can set reminder againgst date and time and also we can set alarm for reminder.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default project

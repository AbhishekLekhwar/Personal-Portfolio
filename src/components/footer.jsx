import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"


const footer = () => {
  return (
    <div id="Footer" className="bg-gray-500 bg-opacity-30 flex justify-around text-slate-300 p-10 md:p-12 items-center space-x-1">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold ">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel Free To Reach Out</h3>

      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center cursor-pointer">
          <MdOutlineEmail size={20}/>
         <a href="abhilekhwar44@gmail.com"> abhilekhwar44@gmail.com </a>
          </li>
        <li className="flex gap-1 items-center cursor-pointer">
          <CiLinkedin size={20}/>
         <a target="_blank" href="https://linkedin.com/in/abhisheklekhwar-919b50256">linkedin</a> 
          </li>
        <li className="flex gap-1 items-center cursor-pointer" >
          <FaGithub size={20}/>
         <a target="_blank" href="https://github.com/AbhishekLekhwar">github</a> 
          </li>
      </ul>
      </div>
  )
}

export default footer
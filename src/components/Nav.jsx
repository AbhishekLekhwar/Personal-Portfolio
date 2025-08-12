import { CgNametag } from "react-icons/cg"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { HiMenuAlt1 } from "react-icons/hi"

const Nav = () => {

  const [toggle, setoggle] = useState(false);

  function openMenu() {
    setoggle(true);
  }
  function closeMenu() {
    setoggle(false);
  }


  return (
    <>
      <div className="flex items-center justify-between p-10 bg-gray-500 bg-opacity-30">

        <div >
          <a href="#" className="text-white font-mono text-3xl 
        tracking-wider flex items-center"><CgNametag />Abhi</a>
        </div>
        <div className="space-x-4" >
          <div className="hidden md:block space-x-2">
            <a href="#About" className="text-white hover:bg-gray-500 rounded-2xl py-3 px-3 text-xl">About</a>
            <a href="#Project" className="text-white hover:bg-gray-500 rounded-2xl py-3 px-3 text-xl">Projects</a>
            <a href="#Footer" className="text-white hover:bg-gray-500 rounded-2xl py-3 px-3 text-xl">Contact</a>
          </div>
        </div>
        <div className="md:hidden">
          {toggle ? (<AiOutlineClose size={30} onClick={closeMenu} className="text-white" />)
            : (<HiMenuAlt1 size={30} onClick={openMenu} className="text-white" />)}
        </div>
      </div>
      <div>
        {toggle ? (
          <div className="flex justify-between ml-20 bg-slate-600">
            <ul className="flex flex-col">
              <a href="#About" className="text-xl text-white hover:bg-gray-500 mb-2 cursor-pointer px-1 rounded-md">About</a>
              <a href="#Project" className="text-xl text-white hover:bg-gray-500 mb-2 cursor-pointer px-1 rounded-md">Projects</a>
              <a href="#Footer" className="text-xl text-white hover:bg-gray-500 mb-2 cursor-pointer px-1 rounded-md">Contact</a>
            </ul>
          </div>) :
          (<div></div>)}
      </div>
    </>
  )
}

export default Nav
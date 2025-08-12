import Nav from "./Nav";
import Hero from "./hero";
import Project from "./project";
import Footer from "./footer";
import About from "./about";

const main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Nav/>
        <Hero/>
        <About/>
        <Project/>
      </div>
      <Footer/>
    </div>
  )
}

export default main

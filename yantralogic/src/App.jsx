import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Solutions from "./components/Solutions/Solutions"
import Numbers from "./components/Numbers/Numbers"
import Form from "./components/Form/Form"
import Navone from "./components/Navbar/Navone"
import Footer from "./components/Footer/Footer"
import OurOfferings from "./components/Extra offerings componetn/OurOfferings"
import SolutionsCards from "./components/Solutions/SolutionsCards"
import AboutUs from "./components/AboutUs/AboutUs"
import ContactUs from "./components/ContactUs/ContactUs"

function App() {
 

  return (
    <>
    <Navone />
     {/* <Navbar /> */}
     <Hero />
     {/* <OurOfferings /> */}
     <Services />
     <Numbers />
     <div className=" overflow-x-hidden">
     <SolutionsCards />
     </div>
    
     {/* <Solutions /> */}
    <Form />
    <Footer />
    <AboutUs />
    <ContactUs />
    </>
  )
}

export default App

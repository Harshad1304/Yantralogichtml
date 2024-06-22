import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Solutions from "./components/Solutions/Solutions"
import Numbers from "./components/Numbers/Numbers"
import Form from "./components/Form/Form"

function App() {
 

  return (
    <>
     <Navbar />
     <Hero />
     <Services />
     <Numbers />
     {/* <Solutions /> */}
    <Form />
    </>
  )
}

export default App

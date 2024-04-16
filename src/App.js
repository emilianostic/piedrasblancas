import Navigation from "./componentes/navegacion";
//import SidebarNavigation from "./componentes/sidebarNavegacion";
import Footer from "./componentes/Footer";
import DatosPersonales from "./componentes/DatosPersonales";
function App() {
  return (
    <>
    <div className="container">
    <Navigation/>
   <DatosPersonales/>
    
    <Footer/>
    </div>
    </>
    
  );
}

export default App;

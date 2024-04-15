import Navigation from "./componentes/navegacion";
import SidebarNavigation from "./componentes/sidebarNavegacion";
import Footer from "./componentes/Footer";
import PiedrasBlancas from "./componentes/piedrasBlancas";
function App() {
  return (
    <>
    <div className="container">
    <Navigation/>
   <PiedrasBlancas/>
    <SidebarNavigation/>
    <Footer/>
    </div>
    </>
    
  );
}

export default App;

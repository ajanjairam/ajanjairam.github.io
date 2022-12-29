import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen font-roboto">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

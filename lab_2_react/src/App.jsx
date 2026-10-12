import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <Header />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Footer />
    </div>
  );
}

export default App;

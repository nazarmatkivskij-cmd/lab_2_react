import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-100 min-h-screen py-8 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        <main>
          <Experience />
          <Skills />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
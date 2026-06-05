import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Summary from './components/Summary';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Summary />
      </main>
    </div>
  );
}

export default App;

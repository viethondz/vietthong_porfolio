import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // 1. Thêm dòng import này ở đây
import Projects from './components/Projects';
import Summary from './components/Summary';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About /> {/* 2. Chèn phần Bản thân vào giữa Hero và Projects */}
        <Projects />
        <Summary />
      </main>
    </div>
  );
}

export default App;
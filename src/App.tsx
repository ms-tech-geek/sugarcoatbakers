import Navigation from './components/Navigation';
import Hero from './components/Hero';
import GalleryGrid from './components/Gallery/GalleryGrid';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <GalleryGrid />
    </div>
  );
}

export default App;

import { useState } from 'react';
import CenterSection from './components/centerSection';
import Footer from './components/footer';
import Header from './components/header';
import ProjectsHero from './components/projectsHero';
import TechnologiesModal from './components/technologiesModal';
import './css/main.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from './components/projectsCarousel';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="background">
        <Header openModal={openModal} />
      </section>
      <CenterSection openModal={openModal} />
      <ProjectsHero openModal={openModal} />
      <ProjectCarousel />
      <div style={{ backgroundColor: 'rgb(10, 1, 25)' }}>
        <div className="container">
          <Footer />
        </div>
      </div>
      <TechnologiesModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

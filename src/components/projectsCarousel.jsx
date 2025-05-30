import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub, FaRocket} from 'react-icons/fa';
import ProjectModalComponent from './projectModal';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'My personal portfolio containing all significant projects.',
    image: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717072089/cards/b0hkg4vkjl6cyrvkzcdr.png',
    githubLink: 'https://github.com/StefanAngelovski/Portfolio-Page',
    liveLink: 'https://physforge.site',
    category: 'WebDev',
    componentName: 'PortfolioWebsite',
  },
  {
    id: 2,
    title: 'Exotic Pet Shop',
    description: 'Website for ordering exotic pets from the web using Django.',
    image: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1720972855/media/Logos/aukinrub9mln8g1fwlc6.png',
    githubLink: 'https://github.com/StefanAngelovski/Exotic_Pet_Shop',
    liveLink: 'https://petshop.physforge.site',
    category: 'WebDev',
    componentName: 'ExoticPetShop',
  },
  {
    id: 3,
    title: 'Robotic Arm',
    description: 'Remotely controlled Robotic Arm - comes with an Android app.',
    image: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717076078/cards/vjbf82mmubdraujd7ibh.jpg',
    githubLink: 'https://github.com/StefanAngelovski/The_Robotic_Arm',
    category: 'Electronics',
    componentName: 'RoboticArm',
  },
  {
    id: 4,
    title: 'ESP32 - Bluetooth Speaker',
    description: 'A bluetooth speaker running on an ESP32 Dev Module, I2C decoder and audio amplifier.',
    image: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1729623131/projects/kbhoamzvn8meolcrmitg.png',
    githubLink: 'https://github.com/StefanAngelovski/ESP32_Bluetooth_Speaker',
    category: 'Electronics',
    componentName: 'BluetoothSpeaker',
  },
  {
    id: 5,
    title: 'ARK Threadripper Launcher',
    description: 'A launcher for a Server in a game called ARK Survival Evolved.',
    image: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717156462/cards/hksnbcces87fd8lpbsxv.png',
    githubLink: 'https://github.com/StefanAngelovski/Ark_Threadripper_Launcher',
    category: 'Software',
    componentName: 'ArkThreadripperLauncher',
  },
  {
    id: 6,
    title: 'Voice To Tweet',
    description: 'You can post tweets just by talking!\n\nUsing the power of whisper by OpenAI and Twitter4J APIs.',
    image: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1722264708/cards/X-logo.jpg',
    githubLink: 'https://github.com/StefanAngelovski/Ark_Threadripper_Launcher',
    liveLink: 'https://voicetotweet.physforge.site',
    category: 'WebDev',
    componentName: 'VoiceToTweet',
  },
  {
    id: 7,
    title: 'Stormwing - Drone',
    description: 'A small diy drone',
    image: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1729352086/projects/b6nzsddtopcsv5m6yjwm.jpg',
    category: 'Electronics',
    githubLink: '',
    componentName: 'Stormwing',
  },
  {
    id: 8,
    title: 'JSP - Simulator',
    description: 'Unity Game that simulates the experience of riding a bus in the city of Skopje.',
    image: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1732583935/projects/diq3ax0bfzb5wrlrtpap.png',
    category: 'GameDev',
    githubLink: 'https://github.com/StefanAngelovski/JSP-Simulator',
    componentName: 'JSP-Simulator',
  }
];

const PrevArrow = ({ className, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${className} custom-prev`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dk2fdiuvb/image/upload/v1718914290/cards/hcneshthvsjrcisx00en.png")`,
        width: '20px',
        height: '50px',
        backgroundSize: '50px 100px',
        backgroundPosition: hover ? '0 -50px' : '0 0',
        marginLeft: '-30px',
      }}
    />
  );
};

const NextArrow = ({ className, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${className} custom-next`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dk2fdiuvb/image/upload/v1718914290/cards/hcneshthvsjrcisx00en.png")`,
        width: '20px',
        height: '50px',
        backgroundSize: '50px 100px',
        backgroundPosition: hover ? '20px -50px' : '20px 0',
        marginRight: '-30px',
      }}
    />
  );
};

const ProjectCarousel = () => {
  const [filter, setFilter] = useState('ALL');
  const [revealClass, setRevealClass] = useState('reveal');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [key, setKey] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    setRevealClass('reveal active');
  }, []);

  const handleProjectClick = async (project) => {
    const CustomComponent = lazy(() => import(`./projects/${project.componentName}.jsx`));
    setSelectedProject({ ...project, CustomComponent });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
    setKey(prevKey => prevKey + 1);
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(project => project.category === filter);

  return (
    <div className={`project-carousel ${revealClass} container`}>
      <div className="project-filters">
        {['ALL', 'WebDev', 'Electronics', 'Mobile', 'Software', 'GameDev'].map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={filter === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <Slider key={key} ref={sliderRef} {...settings}>
        {filteredProjects.map((project) => (
          <div key={project.id} onClick={() => handleProjectClick(project)}>
            <div className="project-card" style={{ cursor: 'pointer' }}>
              <img src={project.image} alt={project.title} />
              <div className="p-3">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex gap-2">
                  {project.githubLink && (
                    <a
                      href="#"
                      className="github-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubLink, '_blank');
                      }}
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href="#"
                      className="live-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveLink, '_blank');
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <FaRocket size={20} />
                        <span>Live</span>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <ProjectModalComponent
        project={selectedProject}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProjectCarousel;
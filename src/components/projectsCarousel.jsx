import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub, FaRocket} from 'react-icons/fa';
import ProjectModalComponent from './projectModal';
import projectsWhitelist from '../projects/projects.json';

const fetchGithubData = async (repo) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
};

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
  const [projects, setProjects] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    setRevealClass('reveal active');
    // Load whitelist and fetch GitHub data
    const loadProjects = async () => {
      const loadedProjects = await Promise.all(
        projectsWhitelist.map(async (item, idx) => {
          const githubData = item.repo ? await fetchGithubData(item.repo) : null;
          return {
            id: idx + 1,
            title: item.title,
            description: item.description,
            image: item.image,
            githubLink: item.repo ? `https://github.com/${item.repo}` : '',
            liveLink: item.live,
            stars: githubData?.stargazers_count || 0,
            name: item.name || item.title,
            repo: item.repo,
            category: item.category
          };
        })
      );
      setProjects(loadedProjects);
    };
    loadProjects();
  }, []);

  const handleProjectClick = async (project) => {
    setSelectedProject(project);
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
                      href={project.githubLink}
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== '' && (
                    <a
                      href={project.liveLink}
                      className="live-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-1">
                        <FaRocket size={20} />
                        <span>Live</span>
                      </div>
                    </a>
                  )}
                </div>
                {project.stars > 0 && (
                  <div className="github-stars">⭐ {project.stars}</div>
                )}
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
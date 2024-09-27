import TechnologiesModal from "./technologiesModal";

const services = [
    {
        title: "Websites",
        imgSrc: "https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717057807/Background%20media/logos/sc3lnegjreu6b3yxnujd.ico",
        description: "I handle both front and back-end development, crafting user-friendly websites. My focus is on simple, functional designs that elevate user experiences and support business growth."
    },
    {
        title: "Mobile Apps",
        imgSrc: "https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717057808/Background%20media/logos/b9d4t2fp7gesam97r3pq.ico",
        description: "I showcase expertise in developing intuitive and functional applications for various platforms. With a focus on user-friendly interfaces and robust features, I specialize in creating high-quality mobile experiences that meet diverse needs."
    },
    {
        title: "Electronics",
        imgSrc: "https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717057808/Background%20media/logos/k6z3agimuezkquyeo32v.ico",
        description: "I have proficiency in designing and building electronic systems. From circuitry to embedded systems, I specialize in creating innovative solutions that blend functionality with creativity. My projects showcase a passion for tinkering and a commitment to pushing the boundaries of electronic engineering."
    },
    {
        title: "Game Dev",
        imgSrc: "https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717057807/Background%20media/logos/l5l2hggifslwdwkscfhc.ico",
        description: "I dive into my love for crafting captivating gaming experiences. From brainstorming exciting gameplay ideas to bringing characters to life, I'm all about creating fun and immersive adventures. Let's explore the worlds I've built and the excitement waiting to be unleashed!"
    }
];

const ServiceItem = ({ title, imgSrc, description }) => (
    <div className="pb-4 col-lg-6 col-md-12 col-sm-6 col-12">
        <span className="spinningSquareWrapper mb-4 p-3">
            <img className="spinningSquare" src={imgSrc} alt={title} />
        </span>
        <h3 className="text-white">{title}</h3>
        <p style={{ color: 'silver' }}>{description}</p>
        <hr className="rulerSection" />
    </div>
);

export default function CenterSection({openModal}) {
    return (
        <section className="container fadeIn" style={{ paddingBottom: '2%', paddingTop: '4%' }}>
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-5" id="secondTitle">
                    <span>MY SERVICES</span>
                    <h2 className="pb-3">WHAT DO I DO?</h2>
                    <p className="pb-5 py-3" style={{ color: 'silver' }}>
                        I am a versatile software engineer passionate about creating websites and building robots.
                        As a dedicated tinkerer, I thrive on solving complex problems and bringing ideas to life
                        through technology.
                    </p>
                    <a id="fancyButton" variant="primary" role="button" onClick={openModal}>
                        VIEW ALL TECHNOLOGIES
                    </a>
                    <br />
                    <ul className="pt-5" style={{ listStyle: 'none', paddingLeft: 0 }}>
                        {["Proficient in English", "Highly determined", "Easily adaptable", "Welcomes challenges"].map((item, index) => (
                            <li key={index} className={index % 2 === 1 ? "py-2" : ""}>
                                <i className="fa fa-check checkMark"></i>
                                <span style={{ fontSize: '15px', paddingLeft: '5px'}}>{item}<br /></span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-lg-7 col-md-12">
                    <div className="row">
                        {services.map((service, index) => (
                            <ServiceItem key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
const navLinks = [
    { text: "ABOUT", target: "secondTitle" },
    { text: "PORTFOLIO", target: "centerSection" },
    { text: "TECH", modal: true },  // This will trigger the modal
    { text: "CONTACT", target: "contact" }
];

const socialLinks = [
    { href: "https://github.com/StefanAngelovski", iconClass: "fa-github" },
    { href: "https://x.com/XTeamOmegaX", iconClass: "fa-twitter" },
    { href: "https://www.linkedin.com/in/stefan-angelovski-43181a19a/", iconClass: "fa-linkedin" },
    { href: "https://www.instagram.com/stefanangelovski_/", iconClass: "fa-instagram" },
    { href: "https://www.youtube.com/channel/UClftk6hWK8ajNf3TY2xTxuQ", iconClass: "fa-youtube-play" }
];

// NavigationItem component handles scrolling or modal opening
const NavigationItem = ({ text, target, modal, openModal }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (modal) {
            openModal(); // Call openModal if this is the TECH link
        } else {
            const element = document.getElementById(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <li className="nav-item">
            <a className="nav-link scroll-link" href={"#" + (target || "")} onClick={handleClick}>
                {text}
            </a>
        </li>
    );
};

const SocialIcon = ({ href, iconClass }) => (
    <li className="nav-item">
        <a className="nav-link" href={href} target="_blank" rel="noreferrer">
            <i className={`fa ${iconClass}`}></i>
        </a>
    </li>
);

export default function Header({ openModal }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg" id="mobileBackground">
                <div className="container">
                    <a className="navbar-brand py-3" id="portfolioBrand" href="">
                        <img id="logo" src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1716648762/Background%20media/logos/dqa4nsbyywmfo7r4ty8p.png" alt="IMG" />
                        PORTFOLIO
                    </a>

                    {/* Centered Navigation */}
                    <div className="navbarStyle collapse navbar-collapse justify-content-center" id="centerNav">
                        <ul className="navbar-nav">
                            {navLinks.map((link, index) => (
                                <NavigationItem key={index} {...link} openModal={openModal} />
                            ))}
                        </ul>
                    </div>
                    
                    {/* Social Icons on the right side */}
                    <ul className="navbar-nav contactIcons collapse navbar-collapse justify-content-end" style={{ paddingRight: '50px' }}>
                        {socialLinks.map((link, index) => (
                            <SocialIcon key={index} {...link} />
                        ))}
                    </ul>

                    {/* Sidebar button for mobile view */}
                    <span id="sidebarButton" style={{ paddingRight: '10%' }}>
                        <a style={{ background: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed">
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                            </svg>
                        </a>
                    </span>

                    {/* Sidebar */}
                    <div className="collapse" id="sidebar">
                        <ul className="navbar-nav">
                            {navLinks.filter(link => !link.modal).map((link, index) => (
                                <NavigationItem key={index} {...link} />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Banner Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-8" id="mainText" style={{ paddingTop: '10%' }}>
                        <span className="display-9" id="computerScienceTitle">COMPUTER SCIENCE ENGINEER</span>
                        <h2 className="display-3 pb-5 py-3">Hello,<br /> I'm Stefan Angelovski</h2>
                        <a id="fancyButton" className="scroll-link" href="#" onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('secondTitle');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            SEE MORE ABOUT ME
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

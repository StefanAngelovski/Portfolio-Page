export default function Footer() {
    const socialLinks = [
        { href: "https://github.com/StefanAngelovski", icon: "fa-github" },
        { href: "https://x.com/XTeamOmegaX", icon: "fa-twitter" },
        { href: "https://www.linkedin.com/in/stefan-angelovski-43181a19a/", icon: "fa-linkedin" },
        { href: "https://www.instagram.com/stefanangelovski_/", icon: "fa-instagram" },
        { href: "https://www.youtube.com/channel/UClftk6hWK8ajNf3TY2xTxuQ", icon: "fa-youtube-play" }
    ];
    
    return (
        <>
            <footer className="pb-3">
                <nav className="navbar navbar-expand-md">
                    <a className="navbar-brand pt-3" id="portfolioBrand" href="" style={{ position: 'relative', zIndex: 2 }}>
                        <img id="logo" src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1716648762/Background%20media/logos/dqa4nsbyywmfo7r4ty8p.png" alt="IMG" />
                        PORTFOLIO
                    </a>

                    <ul className="navbar-nav collapse navbar-collapse justify-content-end contactIconsBelow">
                        {socialLinks.map(({ href, icon }) => (
                            <li className="nav-item" key={href}>
                                <a className="nav-link" href={href} target="_blank">
                                    <i className={`fa ${icon}`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <hr style={{ color: 'white', margin: 0, padding: '0 0 50px' }} />
                <div className="row" id="contact">
                    <div className="pb-4 col col-md-4 col-12">
                        <h5 className="text-white pb-3">About me</h5>
                        <span>Stefan Angelovski<br /></span>
                        <span>City: Skopje<br /></span>
                        <span style={{ paddingBottom: '50px' }}>Residence: Macedonia<br /></span>
                        <br />
                        <a href="" className="text-white" style={{ textDecoration: 'none' }}>Download CV &#8594;</a>
                    </div>

                    <div className="pb-4 col col-md-4 col-12">
                        <h5 className="text-white pb-3">Education:</h5>
                        <span><b>High School:</b><br />
                            <a href="https://www.nikolakarev.edu.mk/" target="_blank">SUGS Nikola Karev</a><br /><br />
                            <b>Faculty:</b><br />
                            Faculty of Computer Science and Engineering - <a href="https://www.finki.ukim.mk/en" target="_blank">FINKI</a>
                        </span>
                    </div>

                    <div className="pb-4 col col-md-4 col-12">
                        <h5 className="text-white pb-3">Contact</h5>
                        <span><b>Email:</b><br /></span>
                        <a href="mailto:stefanangelovski2002@gmail.com">stefanangelovski2002@gmail.com</a><br /><br />
                        <span><b>Phone:</b><br /><a href="tel:+389-78-294-115">+389 078-294-115</a><br />
                        Or via SMS</span>
                    </div>
                </div>
            </footer>
        </>
    );
}

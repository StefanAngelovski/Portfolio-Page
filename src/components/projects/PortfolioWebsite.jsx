import '../../css/projects/Projects.css';

export default function PortfolioWebsite() {
    return (
        <div className="portfolio-website">
            <img src="https://github.com/user-attachments/assets/31162cf0-0263-4281-966f-eee71cbba8c4" alt="Portfolio Website" />

            <p>
                This is my portfolio website made using <strong>React JS</strong> and <strong>Bootstrap</strong>. 
                I recently ported it from jQuery, managing to make it a lot cleaner with less repetitive code, 
                as React allows for the use of components. All the pictures are hosted via <strong>Cloudinary</strong>.
            </p>

            <p>
                The website was upgraded from using <strong>Owl-Carousel</strong> for jQuery to <strong>React-Slick</strong>, 
                which is much easier to work with.
            </p>

            <hr />

            <h2>Features</h2>

            <h3>Neon Look</h3>
            <p>
                I was inspired by the <strong>retrowave</strong> style, which draws on <strong>futurism</strong>, perfectly describing my projects.
            </p>

            <h3>Modals</h3>
            <p>
                I'm particularly proud of the modals, especially the <strong>technologies modal</strong>, which can be triggered via two buttons.
                A large rectangle with a gradient rotates around, with the edges of the modal removed, giving it a unique <strong>neon animation</strong>.
            </p>

            <img src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1727432073/projects/qxcya2jxgixxhyub68ba.png" alt="Modals" />

            <h3>Animated Buttons</h3>
            <p>
                I've added <strong>hover animations</strong> to some of the buttons, further emphasizing the retrowave style. 
                The modals feature a rotating rectangle with a gradient cut using the inset property for a dynamic look.
            </p>

            <h3>Responsive Design</h3>
            <p>
                The site is fully responsive and adapts to different screen sizes.
            </p>

            <h3>Colourful Scrollbars</h3>
            <p>
                The website features <strong>cyan scrollbars</strong> that work across most browsers. It's a small detail, but it really adds a pop of color!
            </p>

            <hr />

            <h2>React-Slick Carousel</h2>
            <p>
                The website also includes a carousel with <strong>category filtering</strong> for different project types 
                (e.g., Web Dev, Electronics, Mobile, Software, etc.).
            </p>

            <hr />

            <h2>Contact Information & CV</h2>
            <p>
                The website provides ways to <strong>contact</strong> me, along with social media links. 
                You can also <strong>download my CV</strong> directly from the site.
            </p>
        </div>
    );
}

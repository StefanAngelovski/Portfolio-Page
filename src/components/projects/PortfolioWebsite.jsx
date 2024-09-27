import '../../css/projects/PortfolioWebsite.css'

export default function PortfolioWebsite() {
    return (
        <div>
            <img 
                src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717072089/cards/b0hkg4vkjl6cyrvkzcdr.png" 
                alt="IMG" 
                style={{ maxWidth: "100%" }} 
            />

            <section>
                <h1>Front end</h1>
                <p>This website has recently been upgraded to React from pure HTML/CSS/jQuery.</p>
                <p>
                    Some of the things I included is jumping to sections of the page, without changing the url,
                    Carousel filtering based on some categories. All the pictures are hosted via the Cloudinary cloud.
                    Website upgraded from OWL-Carousel in jQuery to React-Slick which is allot easier to work with.
                    All the 
                </p>
            </section>

            <section>
            <h1>The modals</h1>
                <img
                    src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1727432073/projects/qxcya2jxgixxhyub68ba.png"
                    alt="IMG"
                    style={{ maxWidth: "100%" }}
                />
                <p>Fairly proud of the modals, the first one is the technologies modal which can be triggered via two buttons, a big rectangle with a gradient rotates around with the edges of the modal
                    removed, so it has that neon animation.
                </p>
            </section>

            <section>
            <h1>Features</h1>
                <ul>
                    <li>Neon Look: I was inspired by the retrowave style which inspires futurism. Which I believe describe my projects fairly well.</li>
                    <li>Animated Buttons: I've added hover animations over some of the buttons, further emphasizing the style. The modals use a rotating rectangle with a gradient that is cut inside of an inset property.</li>
                    <li>Colourful scrollbars: Cyan scrollbars, yo! Works on most browsers.</li>
                    <li>Responsive: The site is responsive and will adapt to the screen size.</li>
                    <li>Owl Carousel: Projects need a way of not filling up all the screen space, this is one solution which is quite elegant.</li>
                </ul>
            </section>
        </div>
    );
}
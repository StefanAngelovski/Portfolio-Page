import '../../css/projects/Projects.css';

export default function JSPSimulator() {
    return (
        <div className="jsp-simulator">
            <div className="header">
                <img 
                    src="https://raw.githubusercontent.com/vuevskiN/GameJam-JSP-Simulator/refs/heads/master/GitFiles/header.png" 
                    alt="JSP Simulator Event Logo" 
                    className="event-logo"
                />
                <h1>JSP Simulator - Best Game Design Winners (GO Game Jam 2024)</h1>
            </div>

            <div className="game-overview">
                <p>
                    A unique game that explores the theme of <strong>SPACE</strong> by challenging players to 
                    <strong>fit people into limited space</strong> on a bus. This strategic puzzle game won the 
                    Best Game Design award at GO Game Jam 2024, combining time management with spatial reasoning.
                </p>
            </div>

            <hr className="divider" />

            <section className="main-features">
                <h2>Core Features</h2>
                
                <div className="feature-block">
                    <h3>Game Objective</h3>
                    <p>
                        Pack as many passengers as possible into the bus before the next one arrives. 
                        Strategic placement and quick thinking are essential for success.
                    </p>
                </div>

                <img 
                    src="https://raw.githubusercontent.com/vuevskiN/GameJam-JSP-Simulator/refs/heads/master/GitFiles/3.gif" 
                    alt="Gameplay Demo" 
                    className="gameplay-gif"
                />

                <div className="feature-block">
                    <h3>Points System</h3>
                    <p>
                        Earn bonus points through strategic passenger placement and discovering hidden achievements.
                        The satisfaction system rewards players for creating optimal seating arrangements.
                    </p>
                </div>

                <div className="feature-block">
                    <h3>Dynamic Systems</h3>
                    <p>
                        Built with <strong>Unity</strong> and <strong>C#</strong>, featuring:
                    </p>
                    <ul className="features-list">
                        <li>Unique passenger characteristics and preferences</li>
                        <li>Advanced grid system for precise seat allocation</li>
                        <li>Unity's rigid body system for realistic animations</li>
                        <li>OpenAI integration for dynamic bus stop calculations</li>
                    </ul>
                </div>

                <img 
                    src="https://raw.githubusercontent.com/vuevskiN/GameJam-JSP-Simulator/refs/heads/master/GitFiles/4.gif" 
                    alt="Game Mechanics Demo" 
                    className="mechanics-gif"
                />
            </section>

            <hr className="divider" />

            <section className="technical-details">
                <h2>Technical Implementation</h2>
                <div className="tech-stack">
                    <h3>Built With</h3>
                    <p>
                        Developed using <strong>Unity Engine</strong> and programmed in <strong>C#</strong>, 
                        featuring sophisticated systems for passenger management and spatial calculations.
                    </p>
                </div>

                <div className="ai-integration">
                    <h3>AI Integration</h3>
                    <p>
                        Leverages <strong>OpenAI</strong> to dynamically calculate bus routes and stops based on 
                        selected municipalities, providing a realistic transit simulation experience.
                    </p>
                </div>
            </section>

            <hr className="divider" />

            <section className="how-to-play">
                <h2>How to Play</h2>
                <div className="instructions">
                    <ol className="steps-list">
                        <li>Start by selecting your destination municipality</li>
                        <li>Use drag-and-drop controls to place passengers in seats</li>
                        <li>Optimize seating arrangements for maximum satisfaction points</li>
                        <li>Complete routes before the timer runs out</li>
                        <li>Discover hidden achievements through strategic placement</li>
                    </ol>
                </div>
            </section>

            <div className="links">
                <a 
                    href="https://beratahmetaj.itch.io/jsp-simulator" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="play-button"
                >
                    Play on Itch.io
                </a>
            </div>
        </div>
    );
}
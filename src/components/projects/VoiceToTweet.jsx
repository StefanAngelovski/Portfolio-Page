import "../../css/projects/RoboticArm.css";
export default function VoiceToTweet(){
    return (
        <>  
            <img src="https://private-user-images.githubusercontent.com/21228164/372270521-e11859d7-4522-49a1-add2-38beb844672d.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc3NzU1MTIsIm5iZiI6MTcyNzc3NTIxMiwicGF0aCI6Ii8yMTIyODE2NC8zNzIyNzA1MjEtZTExODU5ZDctNDUyMi00OWExLWFkZDItMzhiZWI4NDQ2NzJkLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDAxVDA5MzMzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkM2M0MDM5MjMwYjI3YmI1MTJiMzIxNjNjYzM4YjE0NjY3ZDU5MjNlYzBiNmVkMTY3MmU1Y2ZhYWQ2YzMyYzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.DVXp2SSuHQ7iCho4H4UH5aGnVZ4Eyl4I5aKh-zsgSdY" />
            <hr/>
            <h1> What is it? </h1>
            <p><b>Voice To Tweet</b> is a web-based application that transcribes spoken words into text using OpenAI's Whisper Speech-to-Text model. The transcribed text is then posted as a tweet on X (formerly Twitter) via the Twitter4J API.</p>



            <h1> Technologies </h1>
            <ul>
                <li><b>OpenAI Whisper</b>: Converts speech to text.</li>
                <li><b>Twitter4J</b>: Posts tweets to X (Twitter).</li>
                <li><b>JavaScript</b>: Captures microphone input as a `.wav` file and handles front-end logic.</li>
                <li><b>Spring Boot</b>: Powers the back-end server.</li>
                <li><b>Thymeleaf</b>: Template engine for rendering HTML.</li>
            </ul>
            <img src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1727775885/projects/amocnszt0gxizelokjky.png" />            <hr/>

            <h1>How It Works</h1>
            <ol>
                <li>The user records speech via the web interface.</li>
                <li>JavaScript converts the microphone input into a `.wav` file.</li>
                <li>The `.wav` file is sent to Whisper, which transcribes the speech into text.</li>
                <li>The transcribed text is posted to X using the Twitter4J API.</li>
            </ol>

            <h1>Project Details</h1>
            <p>The front-end is built using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. The back-end is built using <b>Spring Boot</b>, with Thymeleaf for rendering the front-end. JavaScript handles the front-end logic, particularly converting the audio and sending it to the back-end.</p>

            <p>The project was created for the <b>Web Programming</b> course at the <a href="https://www.finki.ukim.mk/">Faculty of Computer Science and Engineering, Skopje </a>.</p>
        </>
    );
}
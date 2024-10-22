import "../../css/projects/Projects.css";
export default function ESP32BluetoothSpeaker() {
  return (
    <div className="project-container">
      <h1>ESP32 Bluetooth Speaker</h1>

      <p>
        This project features an <strong>ESP32 Bluetooth Speaker</strong>, which acts as an audio device. When connected via Bluetooth from a phone or another device, it allows you to stream music wirelessly.
      </p>

      <h2>Project Overview</h2>

      <p>
        The speaker is powered by an <strong>ESP32 Dev Module</strong>, which handles the Bluetooth connection and audio streaming.
      </p>

      <h2>Demo Video</h2>
      <video width="100%" controls>
        <source
          src="https://github.com/user-attachments/assets/53561389-93f5-4d04-a262-4a0a28de1fad"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <h2>Images</h2>

      <img
        src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1729623131/projects/kbhoamzvn8meolcrmitg.png"
        alt="Front of the Bluetooth Speaker"
        className="project-image"
      />
      <p>The front of the Bluetooth speaker, showing the core components.</p>

      <img
        src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1729621555/projects/c3nlofk0elsvhzdzkiuu.png"
        alt="Back of the Bluetooth Speaker"
        className="project-image"
      />
      <p>The back view, displaying the battery and other modules.</p>

      <h2>Key Components</h2>

      <ul>
        <li>
          <strong>ESP32 Dev Module:</strong> The brain of the project, managing Bluetooth communication and handling audio streaming.
        </li>
        <li>
          <strong>PCM5102a I2C Decoder:</strong> Converts the digital audio signals received via Bluetooth into analog signals for output.
        </li>
        <li>
          <strong>PAM8403 5V Digital Amplifier:</strong> A 5V amplifier that boosts the analog audio signal. It also features a potentiometer for volume control.
        </li>
        <li>
          <strong>600mAh Li-Ion Rechargeable Battery:</strong> Provides power for the speaker and can be recharged when needed.
        </li>
        <li>
          <strong>Li-Ion Charger:</strong> Included to recharge the battery.
        </li>
      </ul>

      <h2>Customized Library</h2>
      <p>
        I created a modified library to improve the Bluetooth audio handling and ensure stable audio streaming for the ESP32 module.
      </p>
    </div>
  );
}

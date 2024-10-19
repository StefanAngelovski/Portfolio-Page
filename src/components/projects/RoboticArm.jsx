import "../../css/projects/Projects.css";

export default function RoboticArm() {
    return (
        <>
            <img src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717076078/cards/vjbf82mmubdraujd7ibh.jpg" alt="Robotic Arm Overview" />
            <section>
            <h1>Really? A robot?</h1>
                <p>
                    Yeah cool, isn't it? It is a childhood dream, so I thought about using my electronics knowledge to pull it off.
                    In this project, I used an ESP32 to control the robot's movements remotely. The ESP32 is a microcontroller, which
                    is the brains of the operation. It handles Bluetooth communication between the phone app (which I also created)
                    and the robot itself, allowing control from a distance. The robot was published along with a research paper at
                    the international CIIT conference and presented at Hotel Sirius in Strumica in 2024. You can read more about it below:
                </p>
            </section>

            <section>
                <h1>How it was made</h1>
                <img src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1719133218/projects/nl9glkmqbalkikenvthd.png" alt="Components of the Robotic Arm" />
                <h3>Components</h3>
                <ul>
                    <li><p>1 x Sheet of Plywood: A sturdy yet lightweight base for the robotic arm.</p></li>
                    <li><p>1 x ESPRESSIF ESP32 Devmodule: The brain of the operation, translating smartphone commands into movements.</p></li>
                    <li><p>4 x Servo motors sg90: These act as the muscles of the robotic arm.</p></li>
                    <li><p>1 x Battery Holder (3 cell): Provides power for both the servos and ESP32.</p></li>
                    <li><p>1 x Stable 5V Power Delivery: Ensures reliable servo operation using various power sources.</p></li>
                    <li><p>(Optional) 1 x 3.7V Rechargeable Li-Ion Battery: Can be used for recharging purposes.</p></li>
                </ul>
            </section>

            <section>
            <img src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1719132245/projects/hqkc3jhr40tmju9fou3y.jpg" alt="Robotic Arm in Action" />

            <h1>Considerations</h1>
                <p>
                    The material choice for the frame was important. I didn't have a 3D printer available at the time, so I opted for plywood, 
                    which was sturdy, cheap, and readily available.
                </p>
                <p>
                    I chose the ESP32 because it has more memory than Arduino and a built-in Bluetooth module, allowing for
                    easier communication between the app and the robot.
                </p>
                <p>
                    The servo motors had some issues with current, but I used a lever system to reduce the strain on the motors.
                    In the future, I plan to use metal gear servos for more torque.
                </p>
            </section>

            <section>
                <video width="100%" controls>
                    <source src="https://res.cloudinary.com/dk2fdiuvb/video/upload/v1719132025/projects/w68jtyf2k2jb4jonrmx3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <h1>The Gripper</h1>
                <p>
                    The gripper was initially tested with cardboard and later upgraded to plywood. The gripper operates using two
                    servo motors, with wires connected to the servo horns to control the movement.
                </p>
                <div className="image-video-wrapper">
                    <img src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1719132243/projects/nmtm8indeu7y29okrywa.jpg" alt="Robotic Gripper Design" />
                    <video width="30%" controls className="overlay-video">
                        <source src="https://res.cloudinary.com/dk2fdiuvb/video/upload/v1719132257/projects/gvccxqfdbjrf65wz4h9l.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section>
            <h1>Movement</h1>
                <p>
                    The arm moves in three dimensions, with servos controlling horizontal and vertical movements. The plywood
                    pieces were carefully cut, drilled, and connected with screws to act as pivot points, allowing flexible movement.
                </p>

                <video width="100%" controls>
                    <source src="https://res.cloudinary.com/dk2fdiuvb/video/upload/v1719132038/projects/xxmubq6lmckixmur3l3v.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>


            <section>
                <h1>Mobile App</h1>
                <p>
                    I experimented with different control methods, including a PS4 controller. Eventually, I built my own app using
                    MIT App Inventor, which sends commands via Bluetooth to the ESP32 to control the servos.
                </p>
                <p>
                    A video demonstration is available below. Note that some of the screws were loose during the recording, but this is easily fixed.
                </p>
            </section>

            <section>
                <div className="flex-container">
                    <img src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1719182109/projects/qzeply5beq2pbiibvxyy.jpg" alt="Mobile App Interface" style={{ width: "20%" }} />
                    <h3 className="fancy-button">The Robotic Arm - APP</h3>
                </div>        

                <img src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1719182110/projects/fpu3ruybzlay8kytyubh.jpg" alt="ESP32 Connections" />

                <video width="100%" controls>
                    <source src="https://res.cloudinary.com/dk2fdiuvb/video/upload/v1719132100/projects/cliymbfelyamufifv2gt.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>

            <section>
                <h1>Accomplishments</h1>
                <img src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1719131804/projects/fgyednyxugksax54nnym.jpg" alt="CIIT Presentation" />

                <h1>CIIT 2024</h1>
                <p>
                    I was invited to present this project at the International Conference on Informatics and Information Technologies (CIIT) in 2024.
                    I submitted a research paper under the mentorship of Vlatko Spasev and presented it at Hotel Sirius in Strumica.
                    The event featured presentations from various fields, including AI, robotics, and bioinformatics.
                    Learn more about the event <a href="https://ciit.finki.ukim.mk/" target="_blank" style={{ color: 'cyan' }}>here</a>.
                </p>
                <p>
                    Download the research paper <a href="https://res-console.cloudinary.com/dk2fdiuvb/media_explorer_thumbnails/53a81f1d1d53da4c69ad4102e9da4610/download" download="Robot_Hand_CIIT_2024.pdf" style={{ color: 'cyan' }}>here</a>.
                </p>
            </section>
        </>
    )
};

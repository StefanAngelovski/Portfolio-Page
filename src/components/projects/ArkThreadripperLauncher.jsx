import "../../css/projects/Projects.css";
export default function ArkThreadripperLauncher() {
    return (
        <>
            <img
                src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717156462/cards/hksnbcces87fd8lpbsxv.png"
                alt="Title"
            />
            <p>
                *The image shows a picture of the project and all of the color themes the launcher has.*
            </p>
            <img
                src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1728204952/projects/v2fpoiomv5sugtsy8cov.gif"
                alt="Launcher"
            />
            <p>
                *This GIF shows much of the functionality of the launcher.*
            </p>
            <h2>Project Overview</h2>
            <p>
                The <strong>Ark Threadripper Launcher</strong> is a <strong>WPF application</strong> created in <strong>Visual Studio</strong> using <strong>.NET C#</strong>. It also integrates <strong>MahApps Metro</strong> (learn more here: <a href="https://mahapps.com/" target="_blank" rel="noopener noreferrer">https://mahapps.com/</a>), providing a modern and sleek look to the launcher.
            </p>
            <p>
                The application allows users to connect directly to the <strong>Ark: Threadripper server cluster</strong>, which serves the <strong>Ark: Survival Evolved</strong> and <strong>Ark: Survival Ascended</strong> community. You can check the servers <a href="https://survivetheark.com/index.php?/forums/topic/273566-au-threadripper-server-cluster-9x-all-maps-community-support-dedicated-tr4/" target="_blank" rel="noopener noreferrer">here</a>. Or visit the community's official website <a href="https://yukitsuki.com/" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
            <p>
                This launcher offers several convenient features for users, including direct server connection, Discord integration, customizable themes, game optimization, and a built-in update system.
            </p>
            <h2>Features</h2>
            <ul>
                <li>
                    <strong>Direct Connection to Ark Servers</strong>: Users can connect to the <strong>Ark: Threadripper servers</strong> through Steam. The launcher uses Steam server links like <code>steam://run/346110//+connect%20ark.yukitsuki.com:27016</code> to automatically connect the user to the domain where the Ark Threadripper servers are hosted.
                </li>
                <li>
                    <strong>Discord Integration</strong>: The launcher integrates with Discord, allowing users to see who is online, view a list of users in the server, and check who is currently voice chatting.
                </li>
                <li>
                    <strong>Customizable Themes</strong>: Users can change the theme of the launcher by customizing the bezel and button colors, giving them full control over the appearance of the launcher interface.
                </li>
                <li>
                    <strong>Cache Clearing for Game Optimization</strong>: The launcher provides a cache-clearing feature that helps optimize the game by removing unnecessary cached data. This ensures smoother performance for players.
                </li>
                <li>
                    <strong>Access to Screenshots Folder</strong>: The launcher includes quick access to the screenshots folder, allowing users to view and manage their in-game screenshots directly from the launcher.
                </li>
                <li>
                    <strong>In-App Game News</strong>: Users can stay informed about the latest <strong>Ark: Survival Evolved</strong> and <strong>Ark: Survival Ascended</strong> news and updates within the launcher itself.
                </li>
                <li>
                    <strong>Manual and Automatic Updating System</strong>: The launcher features both manual and automatic updating options, depending on the user’s preference. It connects to <strong>Dropbox</strong> to host the latest versions. When the current version of the launcher doesn’t match the hosted version, users are prompted to update to ensure they’re using the latest build. Additionally, the launcher includes a <strong>patch notes</strong> section that provides a history of new features and fixes introduced in each version.
                </li>
            </ul>
            <h2>Development and Optimization</h2>
            <p>
                This project began as a <strong>freelance project</strong> during my time in high school at <a href="https://nikolakarev.edu.mk/" target="_blank" rel="noopener noreferrer">SUGS Nikola Karev</a>. Although it wasn’t part of my official coursework, I took on the project independently. Recently, I revisited and updated the launcher, optimizing the code based on my current programming knowledge. I significantly reduced the size of the launcher while enhancing its performance.
            </p>
            <img
                src="https://res.cloudinary.com/dk2fdiuvb/image/upload/v1728204929/projects/rha0njbnbvgioz2x7are.gif"
                alt="Launcher2"
            />
            <p>
                *This GIF shows the automatic updating system of the launcher.*
            </p>
            <h2>Technologies Used</h2>
            <ul>
                <li>
                    <strong>WPF (Windows Presentation Foundation)</strong>: Used to create the front-end UI of the launcher, making it interactive and user-friendly.
                </li>
                <li>
                    <strong>.NET C#</strong>: Handles the backend logic and functionality of the launcher.
                </li>
                <li>
                    <strong>MahApps Metro</strong>: Integrated for providing a modern and customizable interface. More about it can be found here: <a href="https://mahapps.com/" target="_blank" rel="noopener noreferrer">https://mahapps.com/</a>.
                </li>
                <li>
                    <strong>Steam Server System</strong>: The launcher connects users to Ark servers using the Steam server system for seamless connections.
                </li>
                <li>
                    <strong>Discord Integration</strong>: Allows the launcher to show online users, including voice chat participants, providing users with live social updates.
                </li>
                <li>
                    <strong>Dropbox</strong>: Used for managing the automatic updating system by hosting the latest launcher version.
                </li>
            </ul>
            <h2>Community</h2>
            <p>
                The <strong>Ark Threadripper Server Cluster</strong> is part of a vibrant community in the <strong>Ark: Survival Evolved</strong> and <strong>Ark: Survival Ascended</strong> games. These servers provide a well-managed and enjoyable experience for players. For more information, you can check the server cluster <a href="https://survivetheark.com/index.php?/forums/topic/273566-au-threadripper-server-cluster-9x-all-maps-community-support-dedicated-tr4/" target="_blank" rel="noopener noreferrer">here</a>. Or visit the official website here: <a href="https://yukitsuki.com/" target="_blank" rel="noopener noreferrer">https://yukitsuki.com/</a>.
            </p>
        </>
    );
}

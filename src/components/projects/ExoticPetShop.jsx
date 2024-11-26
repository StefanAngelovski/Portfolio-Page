export default function ExoticPetShop(){
    return (
        <>
            <h1>Exotic Pet Shop</h1>

            <img
                src="https://github.com/user-attachments/assets/d187dff6-f7e3-4f27-884d-9690139d2be8"
                alt="Main GIF of Features"
                style={{width: "100%", height: "auto"}}
            />

            <hr />

            <h2>Overview</h2>
            <p>
                Welcome to the <strong>Exotic Pet Shop</strong>, an open-source e-commerce platform dedicated to exotic pet enthusiasts. This project showcases a responsive website built with <strong>Django</strong> and <strong>jQuery</strong>, featuring secure user authentication, an intuitive interface, and robust database management.
            </p>
            <p>
                The platform offers tools for listing exotic animals and their care supplies, managing user accounts, and facilitating secure purchases. Whether you're a reptile lover or an invertebrate enthusiast, this project is designed to connect exotic pet businesses with customers.
            </p>

            <img
                src="https://github.com/user-attachments/assets/a88f544c-e1ef-4214-b4c9-107cf9b32eb0"
                alt="Small GIF of Features"
                style={{width: "100%", height: "auto"}}
            />

            <p>
                <strong>🔐 Admin Demo Login:</strong>
                <br />
                <strong>Email:</strong> admin@admin.com
                <br />
                <strong>Password:</strong> admin
            </p>

            <p>
                Note: The project uses SQLite for prototyping purposes, with the flexibility to scale to larger databases.
            </p>

            <hr />

            <h2>Key Features</h2>

            <h3>🐾 Animal Listings</h3>
            <ul>
                <li>
                    <strong>Comprehensive Inventory:</strong> Displays detailed information about each animal, including scientific name and care details.
                </li>
                <li>
                    <strong>Category Filtering:</strong> Filter animals by type using a recursive category tree.
                </li>
                <li>
                    <strong>Search Bar:</strong> Search animals by name with real-time autocomplete functionality.
                </li>
            </ul>

            <hr />

            <h3>🛒 Cart System</h3>
            <ul>
                <li>
                    <strong>Dynamic Cart:</strong> Add animals to the cart with options for selecting quantity, sex, and age.
                </li>
                <li>
                    <strong>Price Updates:</strong> Cart prices adjust dynamically based on quantity and selected options.
                </li>
                <li>
                    <strong>Editable Cart Items:</strong> Modify or remove items directly from the cart.
                </li>
            </ul>

            <hr />

            <h3>🛠️ Supplies & Feeders</h3>
            <ul>
                <li>
                    <strong>Wide Selection:</strong> Includes terrariums, UVB lights, feeder insects, and rodents.
                </li>
                <li>
                    <strong>Category Organization:</strong> Supplies are neatly categorized for easy navigation.
                </li>
            </ul>

            <hr />

            <h3>📱 Responsive Design</h3>
            <p>Fully optimized for desktop and mobile, ensuring seamless user experience across devices.</p>

            <hr />

            <h3>👤 User Profile Management</h3>
            <ul>
                <li>
                    <strong>Editable User Information:</strong> Update preferences, shipping details, and newsletter subscriptions.
                </li>
                <li>
                    <strong>Order History:</strong> View detailed purchase history.
                </li>
            </ul>

            <hr />

            <h3>🛍️ Checkout System</h3>
            <ul>
                <li>
                    <strong>Secure Transactions:</strong> Enter and manage credit card details safely.
                </li>
                <li>
                    <strong>Order Review:</strong> Review cart items and their total cost before placing an order.
                </li>
            </ul>

            <hr />

            <h3>📖 Additional Pages</h3>
            <ul>
                <li>
                    <strong>About Us:</strong> Learn about the business and its mission.
                </li>
                <li>
                    <strong>Contact:</strong> Store location, general contact details, and a "Send us a message" feature for inquiries.
                </li>
            </ul>

            <hr />

            <h2>Technologies Used</h2>
            <ul>
                <li>
                    <strong>Backend:</strong> Django, leveraging its robust framework for secure authentication and database management.
                </li>
                <li>
                    <strong>Frontend:</strong> jQuery for dynamic and responsive user interactions.
                </li>
                <li>
                    <strong>Database:</strong> SQLite (for prototyping).
                </li>
            </ul>
        </>
    );
}
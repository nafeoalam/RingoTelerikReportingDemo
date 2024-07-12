import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <img
            src="https://ringoqa.svam.com/static/media/ringoLogo.2b424f4c49cd251c402b.png"
            className="logo"
            alt="Ringo Logo"
          />
        </li>
        <li>Home</li>
        <li>Requisition</li>
        <li>Candidate</li>
        <li>Onbarding</li>
        <li>Job Management</li>
        
        {/* Add more links as needed */}
      </ul>

      <style jsx>{`
        .logo {
          width: 90px; /* Adjust the width as needed */
          height: 35px; /* Maintain aspect ratio */
          vertical-align: middle; /* Align vertically within the list item */
          margin-right: 35px;
        }

        .navbar {
          background: linear-gradient(to right, #11356F, #008788);
          color: white;
          padding: 10px;
          text-align: center;
        }

        .navbar ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex; /* Use flexbox for better alignment */
          align-items: center; /* Align items vertically */
        }

        .navbar ul li {
          margin-right: 25px;
           font-size: 18px;
           font-weight: 400;
           font-family: 'Arial', sans-serif;
        }

        .navbar ul li a {
          color: white;
          text-decoration: none;
        }

        .navbar ul li a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

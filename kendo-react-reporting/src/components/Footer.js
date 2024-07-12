// components/Footer.js

const Footer = () => {
    return (
      <footer className="footer">
        <p>Copyright 2024,All Rights reserved Ringo Version 1.34.1. All rights reserved.</p>
        {/* Add additional footer content as needed */}
        <style jsx>{`
          .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            background: linear-gradient(to right, #11356F, #008788);
            color: white;
            text-align: center;
            padding: 10px;
            height: 35px;
            font-family: Open Sans;
          }
        `}</style>
      </footer>
    );
  };
  
  export default Footer;
  
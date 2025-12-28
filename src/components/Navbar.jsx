import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        {/* MENU ICON */}
        <div className="menu-icon" onClick={() => setOpenMenu(true)}>
          ☰
        </div>

        {/* BRAND */}
        <div className="brand">
          <h2>EMA Organics</h2>
        </div>

        {/* RIGHT ICONS */}
        <div className="nav-icons">
          <span onClick={() => setShowSearch(!showSearch)}>🔍</span>
          <span>🛒</span>
        </div>

        {/* SEARCH INPUT */}
        {showSearch && (
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            onChange={(e) => onSearch(e.target.value)}
          />
        )}
      </nav>

      {/* SIDEBAR */}
      {openMenu && (
        <div className="sidebar">
          <span className="close-btn" onClick={() => setOpenMenu(false)}>
            ✕
          </span>

          <ul>
            <li onClick={() => scrollTo("home")}>Home</li>
            <li onClick={() => scrollTo("products")}>Products</li>
            <li onClick={() => setShowContact(true)}>Contact Us</li>
          </ul>
        </div>
      )}

      {/* CONTACT FORM MODAL */}
      {showContact && (
        <div className="contact-modal">
          <div className="contact-box">
            <h3>Contact Us</h3>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>

            <button>Send</button>
            <button className="close" onClick={() => setShowContact(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

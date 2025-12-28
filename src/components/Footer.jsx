const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT US */}
        <div className="footer-section">
          <h3>About EMA Organics</h3>
          <p>
            EMA Organics provides 100% herbal and chemical-free products.
            Our mission is to promote natural health and wellness across Pakistan.
          </p>
        </div>

        {/* SHIPPING POLICY */}
        <div className="footer-section">
          <h3>Shipping Policy</h3>
          <p>🚚 Delivery all over Pakistan</p>
          <p>⏱ Delivery Time: 3–5 working days</p>
          <p>💰 Cash on Delivery available</p>
        </div>

        {/* CONTACT US */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <form className="footer-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="button">Send</button>
          </form>
        </div>

        {/* NEWSLETTER / SUBSCRIBE */}
<div className="footer-section">
  <h3>Subscribe for Offers & News</h3>
  <p>Get latest updates and special offers directly to your inbox.</p>
  <form className="footer-form">
    <input type="email" placeholder="Your Email" />
    <button type="button">Subscribe</button>
  </form>
</div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/ema_organic_official?igsh=MWtiZms1YXpmNDNlYg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/insta logo.avif" alt="Instagram" />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/fblogo.avif" alt="Facebook" />
          </a>

          <a
            href="https://www.tiktok.com/@ema_organic_official?_r=1&_t=ZS-92YMqjanUV0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/tiktoklogo.avif" alt="TikTok" />
          </a>
        </div>

        <p>© 2025 EMA Organics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

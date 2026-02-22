// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProductCard from "./components/ProductCard";
// import products from "./data/products";
// import "./index.css";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <main className="main">
//         <h1>Welcome to MyShop</h1>
//         <p>Your simple ecommerce website</p>
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;




// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProductCard from "./components/ProductCard";
// import products from "./data/products";
// import "./index.css";

// function App() {
//   return (
//     <>
//       <Navbar />

// <main id="products" className="main">
//       <div id="home" className="hero-video">

//   <video
//     src="/1227 (1).mp4"
//     autoPlay
//     loop
//     muted
//     playsInline
//   ></video>

//   <div className="hero-content">
//     <h1>Welcome to EMA Organic</h1>
//     <p>Quality products at best prices</p>
//     <button onClick={() => {
//       const video = document.querySelector(".hero-video video");
//       video.muted = false;
//       video.volume = 1;
//     }}>
//       🔊 Enable Sound
//     </button>
//   </div>
// </div>


//         <h2 className="page-title">Our Products</h2>


//         <div className="products">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </main>


//       {/* Product Gallery Section */}
// <section className="product-gallery">
//   <img src="/pic1.jpeg" alt="Product 1" />
//   <img src="/pic2.jpeg" alt="Product 2" />
//   <img src="/pic3.jpeg" alt="Product 3" />
// </section>

// {/* Reviews Section */}
// <section className="reviews">
//   <h2>Customer Reviews</h2>

//   <div className="review-cards">
//     <div className="review-card">
//       <p className="stars">★★★★★</p>
//       <p className="review-text">
//         Amazing results! My hair fall reduced within two weeks. Highly recommended.
//       </p>
//       <h4>— Ali Raza</h4>
//     </div>

//     <div className="review-card">
//       <p className="stars">★★★★☆</p>
//       <p className="review-text">
//         Pain relief oil works really well for joint pain. Very satisfied with the quality.
//       </p>
//       <h4>— Sana Khan</h4>
//     </div>

//     <div className="review-card">
//       <p className="stars">★★★★★</p>
//       <p className="review-text">
//         Herbal shampoo smells great and feels natural. Will buy again!
//       </p>
//       <h4>— Usman Ahmed</h4>
//     </div>
//   </div>
// </section>


//       <Footer />
//       <a
//   href="https://wa.me/923044312356"
//   className="whatsapp-float"
//   target="_blank"
// >
//   💬
// </a>

//     </>
//   );
// }

// export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./index.css";

function App() {
  // 🔍 SEARCH STATE
  const [searchTerm, setSearchTerm] = useState("");

  // 🔎 FILTER PRODUCTS
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
<div className="upbar"> 
  FREE SHIPPING ON ORDERS OVER PKR 2000 !
</div>
 
  
      {/* NAVBAR WITH SEARCH */}
      <Navbar onSearch={setSearchTerm} />

      {/* HOME SECTION */}
      <section id="home" className="hero-video">
        <video
          src="/1227 (1).mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-content">
          <h1>Welcome to EMA Organic</h1>
          <p>PURE HERBAL CARE YOU CAN TRUST</p>
          <button
            onClick={() => {
              const video = document.querySelector(".hero-video video");
              if (video) {
                video.muted = false;
                video.volume = 1;
              }
            }}
          >
            🔊 Enable Sound
          </button>
        </div>
      </section>

      {/* ROLLING TEXT SECTION */}
<section className="rolling-text">
  <div className="rolling-track">
    <span> ☘︎ 100% HERBAL ☘︎</span>
    <span> ☘︎ MADE FOR YOUR COMFORT ☘︎ </span>
    <span> ☘︎ YOUR PEACE OUR PIORITY ☘︎ </span>
    <span> ☘︎ 100% HERBAL ☘︎</span>
    <span> ☘︎ MADE FOR YOUR COMFORT ☘︎ </span>
    <span> ☘︎ YOUR PEACE OUR PIORITY ☘︎ </span>
   
  </div>
</section>


      {/* PRODUCTS SECTION */}
      <main id="products" className="main">
        <h2 className="page-title">Our Products</h2>

        <div className="products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No products found</p>
          )}
        </div>
      </main>

      {/* PRODUCT GALLERY */}
      <section className="product-gallery">
        <img src="/shamp1.jpeg" alt="Product 1" />
        <img src="/poil1.PNG" alt="Product 2" />
        <img src="/oil.jpeg" alt="Product 3" />
      </section>

      {/* REVIEWS SECTION */}
      <section className="reviews">
        <h2>Customer Reviews</h2>

        <div className="review-cards">
          <div className="review-card">
            <p className="stars">★★★★★</p>
            <p className="review-text">
              Amazing results! My hair fall reduced within two weeks. Highly recommended.
            </p>
            <h4>— Ali Raza</h4>
          </div>

          <div className="review-card">
            <p className="stars">★★★★☆</p>
            <p className="review-text">
              Pain relief oil works really well for joint pain. Very satisfied with the quality.
            </p>
            <h4>— Sana Khan</h4>
          </div>

          <div className="review-card">
            <p className="stars">★★★★★</p>
            <p className="review-text">
              Herbal shampoo smells great and feels natural. Will buy again!
            </p>
            <h4>— Usman Ahmed</h4>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER SECTION */}
      <footer id="contact">
        <Footer />
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/923044312356"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </>
  );
}

export default App;


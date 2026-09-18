import "./App.css";

const categories = [
  "Burger",
  "Pizza",
  "Biryani",
  "Healthy",
  "Desserts",
  "Drinks",
  "Seafood",
];

const deals = [
  {
    name: "Crispy Chicken Burger",
    price: 9.99,
    oldPrice: 14.5,
    rating: 4.8,
    tag: "30% OFF",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Loaded Veg Pizza",
    price: 12.5,
    oldPrice: 17.0,
    rating: 4.7,
    tag: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chicken Shawarma",
    price: 8.25,
    oldPrice: 12.0,
    rating: 4.9,
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Falafel Wrap",
    price: 7.9,
    oldPrice: 10.5,
    rating: 4.6,
    tag: "Healthy",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <div className="brand-mark">AK</div>
            <div>
              <div className="brand-text">AMEEN KATTANCHAYA</div>
              <div className="brand-sub">Traditional Taste</div>
            </div>
          </div>

          <div className="search-wrap">
            <span>⌕</span>
            <input type="text" placeholder="Search dishes, restaurants or cuisines" />
          </div>

          <div className="nav-actions">
            <button className="location-pill">📍 Kochi, Kerala</button>
            <button className="cart-btn">
              Cart
              <span className="cart-count">2</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container main-content">
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-tag">⚡ Free delivery over ₹399</div>
              <h1>Fresh taste, fast delivery</h1>
              <p>
                Authentic flavors, quick delivery, and special combo offers for
                every craving and every food moment.
              </p>

              <div className="hero-actions">
                <button className="primary-btn">Order now</button>
                <button className="secondary-btn">Explore deals</button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-glow"></div>
              <div className="food-panel">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
                  alt="delicious food"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>Popular categories</h2>
            <a href="#" className="view-link">View all</a>
          </div>

          <div className="category-row">
            {categories.map((item, idx) => (
              <button
                key={item}
                className={`category-pill ${idx === 0 ? "active" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>Trending deals</h2>
            <a href="#" className="view-link">See more</a>
          </div>

          <div className="product-grid">
            {deals.map((item) => (
              <article className="product-card" key={item.name}>
                <div className="product-media">
                  <img src={item.image} alt={item.name} />
                  <span className="badge">{item.tag}</span>
                  <button className="wish">♡</button>
                </div>

                <div className="product-body">
                  <div className="product-head">
                    <h3 className="product-title">{item.name}</h3>
                  </div>

                  <div className="meta-row">
                    <span>⭐ {item.rating}</span>
                    <span className="dot"></span>
                    <span>20-30 min</span>
                  </div>

                  <div className="product-footer">
                    <div className="price-box">
                      <span className="price">₹{item.price}</span>
                      <span className="old-price">₹{item.oldPrice}</span>
                    </div>
                    <button className="mini-btn">Add</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="promo-banner">
          <div className="promo-inner">
            <div className="promo-copy">
              <div className="promo-small">Weekend special</div>
              <h3>Get 2 for 1 combo meals</h3>
              <p>
                Delicious grills, biryanis, and house specials with limited-time
                offers made for your weekend cravings.
              </p>
              <button className="cta-btn">Claim offer</button>
            </div>

            <div className="promo-image">
              <img
                src="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80"
                alt="combo meals"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>Best sellers</h2>
            <a href="#" className="view-link">More picks</a>
          </div>

          <div className="best-sellers">
            <article className="seller-item">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
                alt="Smoky BBQ Burger"
              />
              <div style={{ flex: 1 }}>
                <div className="seller-badge">Top Rated</div>
                <h4>Smoky BBQ Burger</h4>
                <div className="seller-bottom">
                  <span className="seller-price">₹299</span>
                  <button className="tiny-btn">Add</button>
                </div>
              </div>
            </article>

            <article className="seller-item">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
                alt="Pepperoni Pizza"
              />
              <div style={{ flex: 1 }}>
                <div className="seller-badge">Cheesy</div>
                <h4>Pepperoni Pizza</h4>
                <div className="seller-bottom">
                  <span className="seller-price">₹349</span>
                  <button className="tiny-btn">Add</button>
                </div>
              </div>
            </article>

            <article className="seller-item">
              <img
                src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80"
                alt="Grilled Chicken Wrap"
              />
              <div style={{ flex: 1 }}>
                <div className="seller-badge">Popular</div>
                <h4>Grilled Chicken Wrap</h4>
                <div className="seller-bottom">
                  <span className="seller-price">₹219</span>
                  <button className="tiny-btn">Add</button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-block">
            <div className="brand" style={{ marginBottom: "14px" }}>
              <div className="brand-mark">AK</div>
              <div>
                <div className="brand-text">AMEEN KATTANCHAYA</div>
                <div className="brand-sub">Traditional Taste</div>
              </div>
            </div>
            <p>Fresh food, fast delivery, and everyday savings for your cravings.</p>
          </div>

          <div className="footer-block">
            <h4>Company</h4>
            <ul className="footer-list">
              <li>About us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-block">
            <h4>Support</h4>
            <ul className="footer-list">
              <li>FAQ</li>
              <li>Delivery</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="footer-block">
            <h4>Get app</h4>
            <div className="app-badges">
              <button>App Store</button>
              <button>Google Play</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

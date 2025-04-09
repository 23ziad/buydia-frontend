
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">Buydia</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <section className="hero-section">
        <h1>Shop the Best of Egypt</h>
        <p>Discover top brands and local treasures in one marketplace.</p>
        <div className="hero-buttons">
          <button className="btn-main">Shop Now</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </section>

      <section className="categories-preview">
        <h2>Browse Categories</h2>
        <div className="category-grid">
          <div className="category-card">Clothing</div>
          <div className="category-card">Electronics</div>
          <div className="category-card">Groceries</div>
          <div className="category-card">Pets</div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-info">
          <h3>Buydia</h3>
          <p>Connecting you with Egypt’s finest brands.</p>
        </div>
        <div className="footer-links">
          <Link to="#">About</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Contact</Link>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Buydia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;

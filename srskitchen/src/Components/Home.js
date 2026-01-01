import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>SRS Kitchen</h1>
          <p>
            Delicious home-style catering for weddings, parties & family
            functions
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="ui green button big">
              View Menu
            </Link>
          
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <h3>Quality Food</h3>
          <p>Fresh ingredients cooked with authentic flavors.</p>
        </div>

        <div className="feature-card">
          <h3>Experienced Chefs</h3>
          <p>Traditional recipes prepared by expert hands.</p>
        </div>

        <div className="feature-card">
          <h3>Perfect for Events</h3>
          <p>Weddings, birthdays, house parties & more.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

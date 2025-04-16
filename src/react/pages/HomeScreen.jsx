// src/react/pages/HomeScreen.jsx
import React, { useState, useEffect } from 'react';
import SimpleCarousel from '../components/carousel/Carousel'; // Adjust path if needed
import { BasketButton } from '../components/buttons/BasketButton';
import { SeeMoreButton } from '../components/buttons/IconButtons';
import '@/sass/pages/_home_screen.scss'; // Import your HomeScreen Sass styles
import Card from '../components/cards/Card'; // Import your Card component that renders a single card

const HomeScreen = () => {
  // State variables for API data, loading and error
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data from API when component mounts
  useEffect(() => {
    setLoading(true);
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${apiUrl}/looks`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLooks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-screen">
      {/* Section 1: Carousel with Basket button */}
      <section className="home-section section-carousel">
        <div className="carousel-container">
          <SimpleCarousel />
          <div className="basket-wrapper">
            <BasketButton />
          </div>
        </div>
      </section>

      {/* Section 2: Trending */}
      <section className="home-section section-two">
        <h1>What's trending</h1>
        <p>Seasonal looks, holiday glam, and trending favorites!</p>

        {/* Display API fetching state */}
        {loading && <p>Loading cards...</p>}
        {error && <p>Error: {error}</p>}

        {/* Render fetched cards */}
        <div className="card-list">
          {looks.map((look) => (
            <Card key={look.id} look={look} />
          ))}
        </div>
      </section>

      {/* Section 3: Everyday & Formal with grey background */}
      <section className="home-section section-three">
        <div className="everyday-formal">
          <div className="category">
            <div className="category-header">
              <h1>Everyday</h1>
              <SeeMoreButton />
            </div>
            <p>Your go-to kit for everyday glam</p>
          </div>
          <div className="category">
            <div className="category-header">
              <h1>Formal</h1>
              <SeeMoreButton />
            </div>
            <p>Elegant taste for any formal setting</p>
          </div>
        </div>
      </section>

      {/* Section 4: Reorder */}
      <section className="home-section section-four">
        <div className="section-four-header">
          <h1>Reorder</h1>
          <SeeMoreButton />
        </div>
        <p>Rediscover your past looks</p>
      </section>
    </div>
  );
};

export default HomeScreen;

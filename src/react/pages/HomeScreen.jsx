import React, { useState, useEffect } from 'react';
import SimpleCarousel from '../components/carousel/Carousel';
import { BasketButton } from '../components/buttons/BasketButton';
import { SeeMoreButton } from '../components/buttons/IconButtons';
import Navbar from '../components/navbar/Navbar';
import TrendingCard from '../components/cards/TrendingCard';
import SquareCard from '../components/cards/SquareCard';
import '@/sass/pages/_home_screen.scss';

const HomeScreen = () => {
  const [looks, setLooks] = useState([]);
  const [everydayLooks, setEverydayLooks] = useState([]);
  const [formalLooks, setFormalLooks] = useState([]);
  const [reorderLooks, setReorderLooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      // Simulated API Data
      setLooks([
        {
          id: 1,
          title: 'Christmas Sparkle',
          category: 'Bold',
          level: 'Advanced',
          price: '25,99',
          image: '/mock/christmas_sparkle.png',
        },
        {
          id: 2,
          title: 'Midnight Magic',
          category: 'Classic',
          level: 'Moderate',
          price: '23,99',
          image: '/mock/midnight_magic.png',
        },
        {
          id: 3,
          title: 'Power Glow',
          category: 'Artistic',
          level: 'Advanced',
          price: '20,99',
          image: '/mock/power_glow.png',
        },
        {
          id: 4,
          title: 'Red Sensation',
          category: 'Glamorous',
          level: 'Expert',
          price: '28,99',
          image: '/mock/red_sensation.png',
        },
      ]);

      setEverydayLooks([
        {
          id: 5,
          title: 'Soft Blush',
          category: 'Natural',
          level: 'Easy',
          price: '18,99',
          image: '/cards/sunlit.svg',
        },
        {
          id: 6,
          title: 'Peachy Keen',
          category: 'Fresh',
          level: 'Beginner',
          price: '19,99',
          image: '/mock/peachy_keen.png',
        },
        {
          id: 7,
          title: 'Rosy Day',
          category: 'Everyday',
          level: 'Easy',
          price: '17,50',
          image: '/mock/rosy_day.png',
        },
        {
          id: 8,
          title: 'Sunny Glow',
          category: 'Light',
          level: 'Beginner',
          price: '20,00',
          image: '/mock/sunny_glow.png',
        },
      ]);

      setFormalLooks([
        {
          id: 9,
          title: 'Gala Glam',
          category: 'Elegant',
          level: 'Expert',
          price: '29,99',
          image: '/mock/gala_glam.png',
        },
        {
          id: 10,
          title: 'Velvet Night',
          category: 'Sophisticated',
          level: 'Advanced',
          price: '26,50',
          image: '/mock/velvet_night.png',
        },
        {
          id: 11,
          title: 'Golden Hour',
          category: 'Glam',
          level: 'Expert',
          price: '27,99',
          image: '/mock/golden_hour.png',
        },
        {
          id: 12,
          title: 'Evening Elegance',
          category: 'Formal',
          level: 'Expert',
          price: '30,99',
          image: '/mock/evening_elegance.png',
        },
      ]);

      setReorderLooks([
        {
          id: 13,
          title: 'Everyday Glow',
          category: 'Daily',
          level: 'Moderate',
          price: '21,50',
          image: '/mock/everyday_glow.png',
        },
        {
          id: 14,
          title: 'Quick Fix',
          category: 'Minimal',
          level: 'Beginner',
          price: '15,99',
          image: '/mock/quick_fix.png',
        },
        {
          id: 15,
          title: 'Fresh Start',
          category: 'Clean',
          level: 'Easy',
          price: '19,00',
          image: '/mock/fresh_start.png',
        },
        {
          id: 16,
          title: 'Bronze Mood',
          category: 'Warm',
          level: 'Advanced',
          price: '22,99',
          image: '/mock/bronze_mood.png',
        },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="home-screen" style={{ paddingBottom: '5rem' }}>
      {/* Section 1: Carousel + Basket */}
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

        {loading && <p>Loading cards...</p>}
        {error && <p>Error: {error}</p>}

        {!loading && !error && (
          <div className="card-scroll-wrapper">
            {looks.map((look) => (
              <TrendingCard key={look.id} look={look} showHeart={false} />
            ))}
          </div>
        )}
      </section>

      {/* Section 3: Everyday + Formal */}
      <section className="home-section section-three">
        <div className="category">
          <div className="category-header">
            <h1>Everyday</h1>
            <SeeMoreButton />
          </div>
          <p>Your go-to kit for everyday glam</p>
          <div className="card-scroll-wrapper non-trending-wrapper">
            {everydayLooks.map((look) => (
              <SquareCard key={look.id} look={look} />
            ))}
          </div>
        </div>

        <div className="category">
          <div className="category-header">
            <h1>Formal</h1>
            <SeeMoreButton />
          </div>
          <p>Elegant taste for any formal setting</p>
          <div className="card-scroll-wrapper non-trending-wrapper">
            {formalLooks.map((look) => (
              <SquareCard key={look.id} look={look} />
            ))}
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
        <div className="card-scroll-wrapper non-trending-wrapper">
          {reorderLooks.map((look) => (
            <SquareCard key={look.id} look={look} />
          ))}
        </div>
      </section>

      <Navbar />
    </div>
  );
};

export default HomeScreen;
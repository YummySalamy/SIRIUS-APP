import React, {useEffect, useState} from 'react';
import BasicCard from '../../components/cards/BasicCard';
import SiriusLogo from '/src/assets/sirius-logo.svg';
import './assets/Home.css';

const HomePage = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-content">
          <img
            className="logo"
            src={SiriusLogo}
            alt="Sirius Logo"
          />
          <h1>Welcome to the <span className="highlight">SIRIUS</span> Web-App</h1>
          <p>
            Explore the fascinating world of physics through interactive experiments,
            practical examples, and well-structured content designed for university students.
          </p>
        </div>
      </header>

      <main className="topics-section">
        <h2>Explore Physics Topics</h2>
        <div className="topics-grid">
          <BasicCard
            title="Mechanics"
            description="Understand the fundamentals of motion, forces, and energy."
          />
          <BasicCard
            title="Electricity"
            description="Explore the principles of circuits, currents, and electromagnetism."
          >
            <button className="explore-button">Explore</button>
          </BasicCard>
          <BasicCard
            title="Heat & Waves"
            description="Dive into the concepts of thermodynamics, heat transfer, and wave interference."
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

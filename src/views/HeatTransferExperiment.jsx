import React from 'react';
import CubeLoader2 from '../components/loaders/CubeLoader2';
import SpecialCard from '../components/cards/SpecialCard';

const HeatTransferExperiment = () => {
  return (
    <div>
      <h1>Heat Transfer Experiment</h1>
      <p>Explore the principles of heat transfer through conduction, convection, and radiation.</p>
      <p>
        Heat transfer is the process of energy exchange due to temperature differences. 
        This experiment will help you understand how heat moves through solids, fluids, 
        and electromagnetic waves.
      </p>
      <div
        className="featured-representation"
        style={{
          width: '100%',
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CubeLoader2 />
      </div>
      <main className="topics-section">
        <h2>Experiment Topics</h2>
        <div className="topics-grid">
          <SpecialCard
            title="Conduction"
            description="Learn how heat flows through solids via direct molecular contact."
          />
          <SpecialCard
            title="Convection"
            description="Understand heat transfer in fluids through currents and circulation."
          />
          <SpecialCard
            title="Radiation"
            description="Explore how heat is transferred through electromagnetic waves."
          />
          <SpecialCard
            title="Thermal Conductivity"
            description="Study materials and their ability to conduct heat efficiently."
          />
          <SpecialCard
            title="Insulation"
            description="Discover how insulation prevents heat loss in various systems."
          />
          <SpecialCard
            title="Real-World Applications"
            description="Analyze heat transfer in everyday systems like engines and buildings."
          />
        </div>
      </main>
    </div>
  );
};

export default HeatTransferExperiment;
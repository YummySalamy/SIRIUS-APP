import HomePage from './views/home/HomePage';
import MechanicsPage from './views/MechanicsPage';
import FreeFallExperiment from './views/FreeFallExperiment';
import ProjectileMotion from './views/ProjectileMotion';
import ElectricityPage from './views/ElectricityPage';
import OhmsLawExperiment from './views/OhmsLawExperiment';
import CapacitanceExperiment from './views/CapacitanceExperiment';
import HeatAndWavesPage from './views/HeatAndWavesPage';
import HeatTransferExperiment from './views/HeatTransferExperiment';
import WaveInterferenceExperiment from './views/WaveInterferenceExperiment';
import SettingsPage from './views/SettingsPage';

export const AppRoutes = [
  { path: '/home', element: <HomePage /> },
  { path: '/physics/mechanics', element: <MechanicsPage /> },
  { path: '/physics/mechanics/free-fall', element: <FreeFallExperiment /> },
  { path: '/physics/mechanics/projectile-motion', element: <ProjectileMotion /> },
  { path: '/physics/electricity', element: <ElectricityPage /> },
  { path: '/physics/electricity/ohms-law', element: <OhmsLawExperiment /> },
  { path: '/physics/electricity/capacitance', element: <CapacitanceExperiment /> },
  { path: '/physics/heat-and-waves', element: <HeatAndWavesPage /> },
  { path: '/physics/heat-and-waves/heat-transfer', element: <HeatTransferExperiment /> },
  { path: '/physics/heat-and-waves/wave-interference', element: <WaveInterferenceExperiment /> },
  { path: '/settings', element: <SettingsPage /> },
];
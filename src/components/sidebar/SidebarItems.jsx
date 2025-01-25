import { FaHome, FaCog, FaBolt, FaWaveSquare, FaCogs } from 'react-icons/fa';
import { SiSemrush } from 'react-icons/si';
import { GiFallDown, GiElectricalResistance, GiPsychicWaves, GiHeatHaze } from 'react-icons/gi';
import { IoLogoCapacitor } from 'react-icons/io5';

export const SidebarItems = [
  {
    label: 'Home',
    icon: <FaHome />,
    href: '/',
    isNavTitle: false,
    navItems: [],
  },
  {
    label: 'Physics Mechanics',
    icon: <FaCogs />,
    href: '/physics/mechanics',
    isNavTitle: false,
    navItems: [
      { label: 'Free Fall Experiment', href: '/physics/mechanics/free-fall', icon: <GiFallDown /> },
      { label: 'Projectile Motion', href: '/physics/mechanics/projectile-motion', icon: <SiSemrush /> },
    ],
  },
  {
    label: 'Physics Electricity',
    icon: <FaBolt />,
    href: '/physics/electricity',
    isNavTitle: false,
    navItems: [
      { label: 'Ohm’s Law Experiment', href: '/physics/electricity/ohms-law', icon: <GiElectricalResistance /> },
      { label: 'Capacitance Measurement', href: '/physics/electricity/capacitance', icon: <IoLogoCapacitor /> },
    ],
  },
  {
    label: 'Physics Heat and Waves',
    icon: <FaWaveSquare />,
    href: '/physics/heat-and-waves',
    isNavTitle: false,
    navItems: [
      { label: 'Heat Transfer', href: '/physics/heat-and-waves/heat-transfer', icon: <GiHeatHaze /> },
      { label: 'Wave Interference', href: '/physics/heat-and-waves/wave-interference', icon: <GiPsychicWaves /> },
    ],
  },
  {
    label: 'Settings',
    icon: <FaCog />,
    href: '/settings',
    isNavTitle: false,
    navItems: [],
  },
];

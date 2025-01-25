import { FaHome, FaUser, FaCog, FaBolt, FaThermometerHalf, FaWaveSquare, FaCogs } from 'react-icons/fa';

export const SidebarItems = [
  {
    label: 'Home',
    icon: <FaHome />,
    href: '/home',
    isNavTitle: false,
    navItems: [],
  },
  {
    label: 'Physics Mechanics',
    icon: <FaCogs />,
    href: '/physics/mechanics',
    isNavTitle: false,
    navItems: [
      { label: 'Free Fall Experiment', href: '/physics/mechanics/free-fall' },
      { label: 'Projectile Motion', href: '/physics/mechanics/projectile-motion' },
    ],
  },
  {
    label: 'Physics Electricity',
    icon: <FaBolt />,
    href: '/physics/electricity',
    isNavTitle: false,
    navItems: [
      { label: 'Ohm’s Law Experiment', href: '/physics/electricity/ohms-law' },
      { label: 'Capacitance Measurement', href: '/physics/electricity/capacitance' },
    ],
  },
  {
    label: 'Physics Heat and Waves',
    icon: <FaWaveSquare />,
    href: '/physics/heat-and-waves',
    isNavTitle: false,
    navItems: [
      { label: 'Heat Transfer', href: '/physics/heat-and-waves/heat-transfer' },
      { label: 'Wave Interference', href: '/physics/heat-and-waves/wave-interference' },
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

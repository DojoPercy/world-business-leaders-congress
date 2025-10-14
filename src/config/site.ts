export const siteConfig = {
  name: 'World Business Leaders Congress 2025',
  shortName: 'WBLC 2025',
  description: 'Business Beyond Profit: Shaping a Sustainable and Equitable Future',
  event: {
    date: '15th-19th December 2025',
    location: 'Dubai, UAE',
    theme: 'Business Beyond Profit: Shaping a Sustainable and Equitable Future'
  },
  navigation: [
    { id: 'home', label: 'Home', href: '#home', icon: 'Home' },
    { id: 'about', label: 'About Congress', href: '#about', icon: 'Users' },
    { id: 'agenda', label: 'Congress Agenda', href: '#agenda', icon: 'Calendar' },
    { id: 'packages', label: 'Delegate Packages', href: '#packages', icon: 'Package' },
    { id: 'speakers', label: 'Speakers', href: '#speakers', icon: 'Mic' },
    { id: 'events', label: 'Co-hosted Events', href: '#events', icon: 'CalendarDays' },
    { id: 'awards', label: 'Awards', href: '#awards', icon: 'Award' },
    { id: 'contact', label: 'Contact Us', href: '#contact', icon: 'Mail' },
  ],
  cta: {
    primary: {
      label: 'Secure Your Seat',
      href: '#register',
    },
    secondary: {
      label: 'Explore the Agenda',
      href: '#agenda',
    },
    nominations: {
      label: 'Nominate Now',
      href: '#awards',
    }
  }
} as const


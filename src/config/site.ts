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
    { id: 'why-attend', label: 'Why Attend', href: '#why-attend', icon: 'Target' },
    { id: 'who-attend', label: 'Who Should Attend', href: '#who-attend', icon: 'Users' },
    { id: 'agenda', label: 'Congress Agenda', href: '#agenda', icon: 'Calendar' },
    { id: 'packages', label: 'Delegate Packages', href: '#packages', icon: 'Package' },
    { id: 'events', label: 'Co-hosted Events', href: '#events', icon: 'CalendarDays' },
    { id: 'gallery', label: 'Gallery', href: '#gallery', icon: 'Image' },
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


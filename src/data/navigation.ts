/**
 * Sidebar navigation configuration.
 * Single source of truth — edit here to update every page's sidebar.
 *
 * Grouped by phase: Foundations ships first, Components/Patterns follow.
 */

export type NavigationItem = {
  label: string;
  href: string;
  status?: 'ready' | 'soon';
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    label: 'Get Started',
    items: [
      { label: 'Overview', href: '/', status: 'ready' },
      { label: 'Introduction', href: '/foundations/introduction/', status: 'ready' },
    ],
  },
  {
    label: 'Brand Foundations',
    items: [
      { label: 'Brand Essence', href: '/foundations/brand-essence/', status: 'ready' },
      { label: 'Color', href: '/foundations/color/', status: 'ready' },
      { label: 'Typography', href: '/foundations/typography/', status: 'ready' },
      { label: 'Spacing & Layout', href: '/foundations/spacing-layout/', status: 'ready' },
      { label: 'Radii & Elevation', href: '/foundations/radii-elevation/', status: 'ready' },
      { label: 'Iconography', href: '/foundations/iconography/', status: 'ready' },
      { label: 'Motion', href: '/foundations/motion/', status: 'ready' },
      { label: 'Logo', href: '/foundations/logo/', status: 'ready' },
      { label: 'Voice & Content', href: '/foundations/voice-content/', status: 'ready' },
      { label: 'Accessibility', href: '/foundations/accessibility/', status: 'ready' },
      { label: 'Tokens', href: '/foundations/tokens/', status: 'ready' },
    ],
  },
  {
    label: 'Components',
    items: [
      { label: 'Coming soon', href: '#', status: 'soon' },
    ],
  },
  {
    label: 'Patterns',
    items: [
      { label: 'Coming soon', href: '#', status: 'soon' },
    ],
  },
];

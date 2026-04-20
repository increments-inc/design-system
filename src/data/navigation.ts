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
    label: 'Brand Identity',
    items: [
      { label: 'Introduction', href: '/brand-identity/introduction/', status: 'ready' },
      { label: 'Brand Story', href: '/brand-identity/brand-story/', status: 'ready' },
      { label: 'Mission · Vision · Values', href: '/brand-identity/mission-vision-values/', status: 'ready' },
      { label: 'Positioning', href: '/brand-identity/positioning/', status: 'ready' },
      { label: 'Target Audiences', href: '/brand-identity/target-audiences/', status: 'ready' },
      { label: 'Brand Personality', href: '/brand-identity/brand-personality/', status: 'soon' },
      { label: 'Voice in Depth', href: '/brand-identity/voice-in-depth/', status: 'soon' },
      { label: 'Tone by Context', href: '/brand-identity/tone-by-context/', status: 'soon' },
      { label: 'Messaging Framework', href: '/brand-identity/messaging-framework/', status: 'soon' },
      { label: 'Taglines & Copy Blocks', href: '/brand-identity/taglines/', status: 'soon' },
      { label: 'Logo Applications', href: '/brand-identity/logo-applications/', status: 'soon' },
      { label: 'Social Media Playbook', href: '/brand-identity/social-media/', status: 'soon' },
      { label: 'Content Strategy', href: '/brand-identity/content-strategy/', status: 'soon' },
      { label: 'Photography', href: '/brand-identity/photography/', status: 'soon' },
      { label: 'Presentations & Docs', href: '/brand-identity/presentations/', status: 'soon' },
      { label: 'Partner & Co-Branding', href: '/brand-identity/co-branding/', status: 'soon' },
      { label: 'Trademark & Legal', href: '/brand-identity/trademark-legal/', status: 'soon' },
      { label: 'Versioning & Requests', href: '/brand-identity/versioning/', status: 'soon' },
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

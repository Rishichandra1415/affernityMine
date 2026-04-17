import type { NavItem } from "@/shared/types";

export type NavItemWithChildren = NavItem & {
  items?: NavItem[];
};

export const mainNavigation: NavItemWithChildren[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    items: [
      { label: "Wooden Flooring", href: "/products/wooden-flooring" },
      { label: "PVC Flooring", href: "/products/pvc-flooring" },
      { label: "SBR Flooring", href: "/products/sbr-flooring" },
      { label: "Acrylic System", href: "/products/acrylic-system" },
      { label: "PP Tiles", href: "/products/pp-tiles" },
      { label: "Rubber Tiles", href: "/products/rubber-tiles" },
      { label: "EPDM Rubber Flooring", href: "/products/epdm-rubber-flooring" },
      { label: "Professional Equipment", href: "/products/sports-equipment" },
    ],
  },
  {
    label: "Infrastructure",
    href: "/infrastructure",
    items: [
      // Major Courts
      { label: "Badminton Court", href: "/infrastructure/badminton-court" },
      { label: "Lawn Tennis Court", href: "/infrastructure/lawn-tennis-court" },
      { label: "Basketball Court", href: "/infrastructure/basketball-court" },
      { label: "Running Track", href: "/infrastructure/running-track" },
      { label: "Squash & Padel Courts", href: "/infrastructure/squash-padel-courts" },
      { label: "Cricket Pitch", href: "/infrastructure/cricket-pitch" },
      { label: "Hockey Court", href: "/infrastructure/hockey-court" },
      // Parks & Leisure
      { label: "Children's Park", href: "/infrastructure/children-park" },
      { label: "Outdoor Gym", href: "/infrastructure/outdoor-gym" },
      { label: "Swimming Pool", href: "/infrastructure/swimming-pool" },      
      // Professional Services
      { label: "Turnkey Sports Projects", href: "/infrastructure/turnkey-sports-projects" },
      { label: "Maintenance & AMC", href: "/infrastructure/maintenance-and-amc" },      
      // Fundamentals
      { label: "Gym Flooring", href: "/infrastructure/gym-flooring" },
      { label: "Asphalt Base", href: "/infrastructure/asphalt-base" },
      { label: "Chain Link Fencing", href: "/infrastructure/chain-link-fencing" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact-us" },
];

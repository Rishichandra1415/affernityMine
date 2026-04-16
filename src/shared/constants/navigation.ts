import type { NavItem } from "@/shared/types";

export type NavItemWithChildren = NavItem & {
  items?: NavItem[];
};

export const mainNavigation: NavItemWithChildren[] = [
  { label: "Home", href: "/" },
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
    ],
  },
  {
    label: "Infrastructure",
    href: "/infrastructure",
    items: [
      { label: "Badminton Court", href: "/infrastructure/badminton-court" },
      { label: "Lawn Tennis Court", href: "/infrastructure/lawn-tennis-court" },
      { label: "Basketball Court", href: "/infrastructure/basketball-court" },
      { label: "Hockey Court", href: "/infrastructure/hockey-court" },
      { label: "Gym Flooring", href: "/infrastructure/gym-flooring" },
      { label: "Running Track", href: "/infrastructure/running-track" },
      { label: "Asphalt Base", href: "/infrastructure/asphalt-base" },
      { label: "Chain Link Fencing", href: "/infrastructure/chain-link-fencing" },
      { label: "Swimming Pool Construction", href: "/infrastructure/swimming-pool" },
    ],
  },
  { label: "Projects", href: "/projects" },


  { label: "Enquiry", href: "/enquiry" },
  { label: "Contact Us", href: "/contact-us" },
];

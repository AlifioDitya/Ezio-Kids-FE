// src/components/layouts/Footer.tsx
import { Link } from "react-router-dom";

interface FooterLink {
  label: string;
  to: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Shop",
    links: [
      { label: "Shop All", to: "/collections/all" },
      { label: "Girls", to: "/collections/girls" },
      { label: "Boys", to: "/collections/boys" },
      { label: "Baby", to: "/collections/baby" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Our Story", to: "/our-story" },
      { label: "VIP Group", to: "/vip" },
      { label: "Blog", to: "/blog" },
      { label: "Our Fabrics", to: "/our-fabrics" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Returns & Exchanges", to: "/returns" },
      { label: "FAQ", to: "/faq" },
      { label: "Sizing Chart", to: "/sizing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Accessibility", to: "/accessibility" },
    ],
  },
  // add more sections here as needed
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-24 py-16">
        {/* Split: tagline + menus */}
        <div className="flex flex-col md:flex-row md:space-x-16">
          {/* Tagline (left on md+) */}
          <div className="md:w-1/3 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold">Tiny Steps, Big Smiles.</h2>
            <p className="mt-4 text-gray-600">
              Sustainable kidswear for every little adventure.
            </p>
          </div>

          {/* Menus (right on md+): grid of 3 columns */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerSections.map((sec) => (
                <nav
                  key={sec.title}
                  aria-label={sec.title}
                  className="space-y-2"
                >
                  <h3 className="font-semibold text-lg">{sec.title}</h3>
                  <ul role="list" className="space-y-1 text-sm">
                    {sec.links.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="hover:underline hover:text-gray-900 transition"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Ezio Kids. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

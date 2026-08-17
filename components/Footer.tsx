import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_PHONE_DIGITS,
  COMPANY_TAGLINE,
  SERVICES,
} from "@/lib/data";

const COMPANY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/partners", label: "Our Partners" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-xl font-bold text-white">
              {COMPANY_NAME}
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {COMPANY_TAGLINE}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-white/70 transition-colors hover:text-accent-light"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Keep in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden="true" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent-light" aria-hidden="true" />
                <a href={`tel:${COMPANY_PHONE_DIGITS}`} className="hover:text-accent-light">
                  {COMPANY_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent-light" aria-hidden="true" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-accent-light">
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row lg:px-10">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
          <p>Site template — replace with your content before launch.</p>
        </div>
      </div>
    </footer>
  );
}

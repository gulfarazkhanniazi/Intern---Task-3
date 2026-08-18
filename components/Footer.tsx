import Image from "next/image";
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
    <footer className="border-t border-navy/10 bg-surface-strong text-ink">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt={COMPANY_NAME}
              width={2172}
              height={724}
              priority
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {COMPANY_TAGLINE}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-ink/80 transition-colors hover:text-accent-blue"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/80 transition-colors hover:text-accent-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Keep in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent-blue" aria-hidden="true" />
                <a href={`tel:${COMPANY_PHONE_DIGITS}`} className="hover:text-accent-blue">
                  {COMPANY_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent-blue" aria-hidden="true" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-accent-blue">
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" aria-hidden="true" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy/10">
        <div className="mx-auto flex max-w-8xl items-center justify-center px-6 py-6 text-xs text-muted lg:px-10">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

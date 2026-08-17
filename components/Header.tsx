"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_PHONE_DIGITS, NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-surface/95 backdrop-blur supports-backdrop-blur:bg-surface/85">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center" aria-label={COMPANY_NAME}>
          <Image
            src="/logo.png"
            alt={COMPANY_NAME}
            width={2172}
            height={724}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 xl:flex"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  active ? "text-accent-blue" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <span className="text-sm text-muted">Let&apos;s talk:</span>
          <a
            href={`tel:${COMPANY_PHONE_DIGITS}`}
            className="border-2 border-navy/15 px-4 py-2 text-sm font-bold text-accent-blue transition-colors hover:border-accent-blue"
          >
            {COMPANY_PHONE}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink xl:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out xl:hidden max-h-[calc(100vh-80px)] overflow-y-auto ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-1 border-t border-navy/10 bg-surface px-6 py-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wider text-ink/80 hover:bg-navy/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY_PHONE_DIGITS}`}
              className="mt-3 inline-flex items-center justify-center border-2 border-accent-blue px-5 py-3 text-sm font-bold text-accent-blue"
            >
              Let&apos;s talk: {COMPANY_PHONE}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

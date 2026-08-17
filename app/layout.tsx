import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_NAME, COMPANY_TAGLINE } from "@/lib/data";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://techrynex.com";
const DEFAULT_TITLE = `${COMPANY_NAME} | Enterprise IT Procurement & Managed Services`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_TAGLINE,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: COMPANY_NAME,
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: COMPANY_TAGLINE,
    images: [{ url: "/logo.png", width: 2172, height: 724, alt: COMPANY_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: COMPANY_TAGLINE,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function publicPath(...segments: string[]) {
  return "/" + segments.map(encodeURIComponent).join("/");
}

export const ABOUT_HERO_IMAGE = publicPath("About Pgae.jpeg");

export const INTRO_IMAGE = publicPath("Home", "We are Corvex Technology Group.jpeg");

export const VALUE_PROP_IMAGES: Record<string, string> = {
  "Enterprise IT Solutions": publicPath("Home", "Enterprise IT Solutions.jpeg"),
  "Competitive Pricing": publicPath("Home", "Competitive Pricing.jpeg"),
  "Trusted Global Brands": publicPath("Home", "Trusted Global Brands.jpeg"),
  "Fast Quotes & Support": publicPath("Home", "Fast Quotes & Support.jpeg"),
};

export const SERVICE_IMAGES: Record<string, string> = {
  "Software Licensing & Renewals": publicPath(
    "Services",
    "Software Licensing & Renewals.jpeg"
  ),
  "Hardware Procurement": publicPath("Services", "Hardware Procurement.jpeg"),
  "Cybersecurity Solutions": publicPath("Services", "Cybersecurity Solutions.jpeg"),
  "Cloud Solutions": publicPath("Services", "Cloud Solutions.jpeg"),
};

export const CASE_STUDY_IMAGES: Record<string, string> = {
  "Ferrowest Manufacturing Co.": publicPath(
    "Case Studies",
    "Ferrowest Manufacturing Co.jpeg"
  ),
  "Brightfield Healthcare Network": publicPath(
    "Case Studies",
    "Brightfield Healthcare Network.jpeg"
  ),
  "Ashgrove Financial Group": publicPath(
    "Case Studies",
    "Ashgrove Financial Group.jpeg"
  ),
  "Northgate Retail Group": publicPath(
    "Case Studies",
    "Northgate Retail Group.jpeg"
  ),
};

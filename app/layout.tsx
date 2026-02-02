import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Khavisoft - Enterprise ERP Solution",
    template: "%s | Khavisoft",
  },
  description: "Comprehensive ERP solution for modern businesses. Manage finance, HR, inventory, and operations in one unified platform.",
  keywords: ["ERP", "SaaS", "Enterprise Resource Planning", "Business Management", "Khavisoft"],
  authors: [{ name: "Khavisoft Team" }],
  creator: "Khavisoft",
  publisher: "Khavisoft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Khavisoft - Enterprise ERP Solution",
    description: "Streamline your business operations with Khavisoft's comprehensive ERP platform.",
    url: "https://khavisoft.com",
    siteName: "Khavisoft",
    images: [
      {
        url: "/logo.png", // Assuming this is a suitable OG image for now
        width: 800,
        height: 600,
        alt: "Khavisoft Logo",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khavisoft - Enterprise ERP Solution",
    description: "Streamline your business operations with Khavisoft's comprehensive ERP platform.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "FpOcXLjehbFAZIY7dnpGow_jnEmu9IJ0PhG79EUpdwo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

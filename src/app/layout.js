import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Daniel Atu | Portfolio",
  description: "Portfolio website of Daniel Atu",
  openGraph: {
    title: "Daniel Atu | Portfolio",
    description: "Portfolio website of Daniel Atu",
    url: "https://danieelatu-portfolio.vercel.app/", // Replace with your domain
    siteName: "Daniel Atu Portfolio",
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Atu Portfolio Preview",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/me.jpeg",
    shortcut: "/me.jpeg",
    apple: "/me.jpeg",
  },
  themeColor: "#ffffff",
  other: {
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans antialiased">
        <div>{children}</div>
        <Analytics mode="production" />
      </body>
    </html>
  );
}

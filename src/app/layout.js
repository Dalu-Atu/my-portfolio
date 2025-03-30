import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Daniel Atu | Portfolio</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        <meta property="og:image" content="/social-preview.jpg" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        {/* Favicon & Icons */}
        <link rel="icon" href="/me.jpeg" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/me.jpeg" type="image/png" />
        <link rel="apple-touch-icon" href="/me.jpeg" />
        <meta name="theme-color" content="#ffffff" />

        {/* Schema.org Structured Data (JSON-LD) for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Copywrite",
            url: "/",
            publisher: {
              "@type": "Organization",
              name: "Copywrite",
              logo: "/logo-icon.png",
            },
          })}
        </script>
      </head>
      <body className={` bg-gray-100 font-sans antialiased`}>
        <Analytics />
        <div>{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local font: Source Code Pro Regular (applied globally via Tailwind token mapping)
const sourceCodePro = localFont({
  src: [
    {
      path: "../public/fonts/source-code-pro/SourceCodePro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/source-code-pro/SourceCodePro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-source-code-pro",
  display: "swap",
});

// Local font: Source Code Pro Regular (applied globally via Tailwind token mapping)
const jetBrainsMono = localFont({
  src: [
    {
      path: "../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/jet-brains-mono/JetBrainsMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jet-brains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // Helps Next generate absolute URLs for OG/Twitter images
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Agent Traffic Control (ATC)",
  description: "Direct the vibe of your agents in the Agent Traffic Control Room",
  openGraph: {
    title: "Agent Traffic Control (ATC)",
    description: "Direct the vibe of your agents in the Agent Traffic Control Room",
    type: "website",
    url: "/",
    siteName: "Agent Traffic Control (ATC)",
    images: [
      {
        url: "/images/ATC_OG.png",
        width: 2048,
        height: 1280,
        alt: "Agent Traffic Control (ATC)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Traffic Control (ATC)",
    description: "Direct the vibe of your agents in the Agent Traffic Control Room",
    images: ["/images/ATC_OG.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && (!window.crypto || !window.crypto.randomUUID)) {
                window.crypto = window.crypto || {};
                window.crypto.randomUUID = function() {
                  return ([1e7]+-1e3+-4e3+-8e3+-11e7).replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                  );
                };
                if (!window.crypto.getRandomValues) {
                  window.crypto.getRandomValues = function(array) {
                    for (let i = 0; i < array.length; i++) {
                      array[i] = Math.floor(Math.random() * 256);
                    }
                    return array;
                  };
                }
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceCodePro.variable} ${jetBrainsMono.variable} antialiased font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

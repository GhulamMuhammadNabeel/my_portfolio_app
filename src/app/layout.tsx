// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ghulam Muhammad Nabeel | Portfolio",
  description: "Official portfolio of Ghulam Muhammad Nabeel - showcasing projects, skills, and experience in software development and automation.",
  keywords: ["Ghulam Muhammad Nabeel", "Portfolio", "Software Developer", "Automation", "n8n", "Next.js"],
  authors: [{ name: "Ghulam Muhammad Nabeel" }],
  openGraph: {
    title: "Ghulam Muhammad Nabeel | Portfolio",
    description: "Explore the projects and expertise of Ghulam Muhammad Nabeel.",
    url: "https://ghulam-muhammad-nabeel.vercel.app",
    siteName: "Ghulam Muhammad Nabeel",
    images: [
      {
        url: "/og-image.png", // apni image daalna public/ folder me
        width: 1200,
        height: 630,
        alt: "Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghulam Muhammad Nabeel | Portfolio",
    description: "Explore the projects and expertise of Ghulam Muhammad Nabeel.",
    images: ["/og-image.png"],
  },
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

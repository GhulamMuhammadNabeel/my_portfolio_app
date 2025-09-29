import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ghulam Muhammad Nabeel | Data Analyst & Aspiring Data Scientist",
  description:
    "Official portfolio of Ghulam Muhammad Nabeel, Data Analyst and aspiring Data Scientist from Multan, Pakistan. Skilled in exploratory data analysis, insights generation, and freelance research. Student at MNSUAM with professional presence on LinkedIn and Kaggle.",
  keywords: [
    "Ghulam Muhammad Nabeel",
    "Data Analyst",
    "Data Scientist",
    "Exploratory Data Analysis",
    "EDA",
    "MNSUAM",
    "Multan",
    "Portfolio",
    "LinkedIn",
    "Kaggle",
  ],
  openGraph: {
    title: "Ghulam Muhammad Nabeel | Data Analyst & Aspiring Data Scientist",
    description:
      "Portfolio showcasing the projects, skills, and achievements of Ghulam Muhammad Nabeel — Data Analyst, Aspiring Data Scientist, and freelance researcher from Multan, Pakistan.",
    url: "https://ghulam-muhammad-nabeel.vercel.app",
    siteName: "Ghulam Muhammad Nabeel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghulam Muhammad Nabeel | Data Analyst & Aspiring Data Scientist",
    description:
      "Explore the portfolio of Ghulam Muhammad Nabeel — Data Analyst and aspiring Data Scientist from Multan, Pakistan.",
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
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antiliased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}

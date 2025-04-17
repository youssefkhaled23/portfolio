import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdallah Abdeltawab | .NET Backend Developer",
  description:
    "Skilled .NET Backend Developer with experience building robust, scalable APIs and enterprise applications using ASP.NET Core, C#, and SQL Server. Explore my portfolio for real-world projects and backend expertise.",
  keywords:
    ".NET Backend Developer, ASP.NET Core, C# developer, backend web developer, RESTful API, SQL Server, software engineer",
  authors: [{ name: "Abdallah Abdeltawab" }],
  alternates: {
    canonical: "https://your-domain.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Abdallah Abdeltawab Portfolio",
    title: "Abdallah Abdeltawab | .NET Backend Developer",
    description:
      "Experienced .NET Backend Developer skilled in ASP.NET Core, C#, and scalable API architecture. Visit my portfolio to see my backend work in action.",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdallah Abdeltawab - .NET Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdallah Abdeltawab | .NET Backend Developer",
    description:
      "Experienced .NET Backend Developer specializing in ASP.NET Core, C#, and modern backend architecture.",
    images: ["https://your-domain.com/og-image.jpg"],
  },
  themeColor: "#ffffff",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="robots" content="index, follow" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcus Alenius",
  description: "Lorem ipsum.",
  authors: [{ name: "Marcus Alenius" }],
  creator: "Marcus Alenius",
  openGraph: {
    type: "website",
    url: "https://alenius.io",
    title: "Marcus Alenius",
    siteName: "Marcus Alenius",
    description: "Lorem ipsum.",
    images: [
      {
        url: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    title: "Marcus Alenius",
    description: "Lorem ipsum.",
    images: [
      {
        url: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunitoSans.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}

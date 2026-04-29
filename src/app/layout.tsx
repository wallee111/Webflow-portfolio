import type { Metadata } from "next";
import "@devlink/global.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio - Built with Webflow and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

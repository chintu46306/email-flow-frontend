import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Email Flow",
  description: "Email with the flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

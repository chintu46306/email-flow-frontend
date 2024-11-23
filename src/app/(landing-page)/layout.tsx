import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";


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
    <>
        <Navbar/>
        {children}
    </>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Goa Fair Price", description: "A voice-first fair-price oracle for Goa." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

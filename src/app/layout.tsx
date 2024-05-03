import { Quicksand as Fontsans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/Navbar";

const fontSans = Fontsans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

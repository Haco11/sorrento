import { Quicksand as Fontsans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";

const fontSans = Fontsans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const metadata: Metadata = {
  title: "Pizzeria Sorrento",
  description:
    "Välkommen till Sorrento, den bästa pizzan i Västertorp. Vi finns på Störtloppsvägen 26, 129 47 Hägersten.",
  keywords:
    "Sorrento Pizzeria, Pizza, Västertorp, Hägersten, Restaurang, Mat, pizzeria, sorrento",
  icons: "/icon.svg",
};

export { metadata };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <PlausibleProvider
          domain="pizzeriasorrento.se"
          trackLocalhost={true}
          enabled={true}
        />
      </head>
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

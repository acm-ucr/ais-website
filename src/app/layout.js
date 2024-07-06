/* eslint-disable new-cap */
import "./globals.css";
import { Nunito } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Placement from "@/components/Placement";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--nunito-font",
});

export const metadata = {
  title: "Association of Information Systems",
  description: "Association of Information Systems Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body
        className={`${nunito.variable} w-full h-full overflow-x-hidden font-nunito`}
      >
        <Placement />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

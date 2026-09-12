import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SitewideCta from "@/components/layout/SitewideCta";
import FloatingSocialIcons from "@/components/ui/FloatingSocialIcons";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main className="page-main">{children}</main>
        <SitewideCta />
        <Footer />
        <FloatingSocialIcons />
      </body>
    </html>
  );
}

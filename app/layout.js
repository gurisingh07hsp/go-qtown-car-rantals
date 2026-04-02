import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Go Qtown Car Rentals",
  description: "Go Qtown Car Rentals is your premier destination for top-quality car rentals. We offer a wide range of vehicles to suit your needs, whether you're looking for a sleek sedan, a spacious SUV, or a stylish convertible. With our commitment to exceptional customer service and competitive pricing, we strive to make your car rental experience seamless and enjoyable. Whether you're planning a weekend getaway or need a reliable vehicle for business travel, Go Qtown Car Rentals has you covered. Book with us today and experience the freedom of the open road in style and comfort.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

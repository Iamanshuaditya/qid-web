import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "India's #1 ID Gateway - qid",
  description: "qid web clone ",
  icons: [
    {
      rel: "icon",
      url: "https://oneqid.com/wp-content/uploads/2023/06/cropped-qid-invert-32x32.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

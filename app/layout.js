import { Inter } from "next/font/google";
// import "./globals.css";

import "../public/assets/libs/bootstrap/css/bootstrap.min.css";
import "../public/assets/libs/line-awesome/css/line-awesome.min.css";
// // import '../public/assets/libs/swiper/swiper-bundle.min.css'

// import 'animate.css';
// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "../public/assets/css/style.css";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Trending from "@/components/Trending";
import { Provider } from "react-redux";
import { store } from "../store/store";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Quoteverse",
  description: "A place to share your favorite quotes.",
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <div className="h-full w-full pb-20">
            <Navbar />
            <div className="grid grid-cols-12">
              <div className="col-span-3 hidden lg:block">
                <Profile />
              </div>
              <div className="col-span-12 sm:col-span-6">{children}</div>
              <div className="col-span-3 md:col-span-2 hidden sm:block">
                <Trending />
              </div>
            </div>
          </div>
        </body>
      </html>
    </Provider>
  );
}

import React, { useState } from "react";
import Home from "../assets/home.svg";
import Like from "../assets/like.svg";
import Image from "next/image";
import Hamburger from "../assets/hamburger.svg";
import PlaceHolder from "../assets/placeholderProfile.png";
import Link from "next/link";
import Profile from "@/components/Profile";
import Trending from "@/components/Trending";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isTrendingOpen, setIsTrendingOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsProfileOpen(false);
    setIsTrendingOpen(false)
  };

  const toggleProfile = () => {
    setIsOpen(false);
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleTrending = () => {
    setIsTrendingOpen(!isTrendingOpen);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:grid grid-cols-12 border-b-2 border-gray-500">
        <div className="col-span-3  border-gray-500">
          <p className="text-xl font-bold text-center py-3">Quotverse</p>
        </div>

        <div className="col-span-6  border-gray-500 flex items-center justify-center">
          <div className="flex items-center justify-center gap-20">
            <div>
              <Link href="/">
                <Image src={Home} width={25} height={25} alt="home" />
              </Link>
            </div>
            <Link href="/liked">
              <div>
                <Image src={Like} width={25} height={25} alt="like" />
              </div>
            </Link>
          </div>
        </div>
        
      </div>
      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center border-b-2 border-gray-500">
        <div className="p-3" onClick={toggleProfile}>
          <Image
            src={PlaceHolder}
            width={25}
            height={25}
            alt="profile"
            className="rounded-full"
          />
        </div>
        <div className="p-3">
          <p className="text-xl font-bold">Quotverse</p>
        </div>
        <div className="p-3">
          <Image
            src={Hamburger}
            width={25}
            height={25}
            alt="hamburger"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  border-gray-500 py-2 px-4">
          <div className="flex items-center  justify-around gap-20">
            <div>
              <Link href="/">
                <Image src={Home} width={25} height={25} alt="home" />
              </Link>
            </div>

            <div>
              <Link href="/liked">
                <Image src={Like} width={25} height={25} alt="like" />
              </Link>
            </div>
            <div onClick={toggleTrending}>
              <p>Trending</p>{" "}
            </div>
          </div>
        </div>
      )}
      {isProfileOpen && <Profile />}
      {isTrendingOpen && <Trending  setTrendingOpen={setIsTrendingOpen} />}
    </div>
  );
};

export default Navbar;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const getNavClass = (path) =>
    pathname === path
      ? "text-green-600 font-bold border-b-2 border-green-600 pb-1"
      : "text-gray-700 hover:text-green-600 transition-all";

  const links = (
    <>
      <li>
        <Link href="/" className={getNavClass("/")}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/shop" className={getNavClass("/shop")}>
          Shop
        </Link>
      </li>
      <li>
        <Link href="/about" className={getNavClass("/about")}>
          About us
        </Link>
      </li>
      <li>
        <Link href="/blog" className={getNavClass("/blog")}>
          Blog
        </Link>
      </li>
    </>
  );

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* লোগো সেকশন */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600">
              FreshBasket
            </Link>
          </div>

          {/* মাঝখানের মেনু (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8 text-lg font-medium list-none">
              {links}
            </ul>
          </div>

          {/* ডানদিকের সেকশন (Favorites, Cart, Sign in) */}
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-4 text-gray-700 font-medium">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-green-600">
                <Image src="/Heart.png" alt="heart" width={20} height={20} />
                <span>Favorites</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-green-600">
                <Image
                  src="/shopping-cart.png"
                  alt="cart"
                  width={20}
                  height={20}
                />
                <span>Cart</span>
              </div>
            </div>

            <Link
              href="/signin"
              className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Sign in
            </Link>

            {/* মোবাইল মেনু বাটন (daisyUI dropdown) */}
            <div className="lg:hidden dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52 text-black space-y-2"
              >
                {links}
                <hr className="my-2" />
                <li>
                  <Link href="/favorites">Favorites</Link>
                </li>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

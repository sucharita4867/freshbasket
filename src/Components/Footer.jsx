import React from "react";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-12">
        <div className="">
          <div className="">
            <Logo />
            </div>
          <div className=" mt-14">
            <p className="font-medium text-xl text-primary">Download App:</p>
            <div className="flex justify-center mt-2 items-center gap-2">
              <Image src="/googleplay.png" alt="heart" width={90} height={90} />
              <Image src="/appstore.png" alt="heart" width={90} height={90} />
            </div>
          </div>
        </div>
        <nav>
          <h6 className="font-medium text-xl text-primary">Quick links 1</h6>
          <a className="link link-hover text-secondary text-base">Home</a>
          <a className="link link-hover text-secondary text-base">Shop</a>
          <a className="link link-hover text-secondary text-base">About us</a>
          <a className="link link-hover text-secondary text-base">Blog</a>
          <a className="link link-hover text-secondary text-base">
            Detail Blog
          </a>
        </nav>
        <nav>
          <h6 className="font-medium text-xl text-primary">Quick links 2</h6>
          <a className="link link-hover text-secondary text-base">Favorites</a>
          <a className="link link-hover text-secondary text-base">Cart</a>
          <a className="link link-hover text-secondary text-base">Sign in</a>
          <a className="link link-hover text-secondary text-base">Register</a>
        </nav>
        <nav>
          <h6 className="font-medium text-xl text-primary">Contact us</h6>
          <a className="link link-hover text-secondary text-base flex gap-2 items-center justify-center">
            <MdOutlinePhone className="text-[#749b3f] text-xl" />
            1234 5678 90
          </a>
          <a className="link link-hover text-secondary text-base flex gap-2 items-center justify-center">
            <MdOutlineEmail className="text-[#749b3f] text-xl" />
            Freshharvests@gmail.com
          </a>
          <a className="link link-hover text-secondary text-base flex gap-2 items-center justify-center">
            <IoLocationOutline className="text-[#749b3f] text-xl" />
            Tanjung Sari Street, Pontianak, Indonesia
          </a>
          <a className="link link-hover mt-2 text-secondary text-base">
            Accepted Payment Methods:
          </a>
          <div className="flex justify-center items-center gap-2">
            <Image src="/Visa.png" alt="heart" width={60} height={60} />
            <Image src="/Paypal.png" alt="heart" width={60} height={60} />
            <Image src="/ApplePay.png" alt="heart" width={60} height={60} />
          </div>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 p-4">
        <aside className="grid-flow-col items-center">
          <p className="text-secondary text-base">
            © Copyright 2024, All Rights Reserved by Banana Studio
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <FaSquareXTwitter className="text-2xl" />
            <FaFacebookSquare className="text-2xl" />
            <FaInstagramSquare className="text-2xl" />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

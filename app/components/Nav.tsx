"use client";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Nav() {
  const [hamburger, setHamburger] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if(window.scrollY > 0){
      setScrolling(true);
    }else{
      setScrolling(false);
    }
  }

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <nav className={`fixed left-0 right-0 flex items-center justify-center h-24 bg-white transition-shadow duration-1000 ${scrolling ? 'shadow-xl' : 'shadow-none'}`}>
      <div className="max-w-[650px] flex justify-between items-center h-full w-full px-0">
        {/* 로고 */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="100"
            height="50"
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* 네비게이션 */}
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li className="ml-10 uppercase hover:border-b border-black text-xl">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 uppercase hover:border-b border-black text-xl">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="mx-10 uppercase hover:border-b border-black text-xl">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* 햄버거바(메뉴) */}
        <div
          onClick={handleHamburger}
          className="sm:hidden cursor-pointer pl-24"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* 햄버거바로 인한 사이드메뉴 */}
      <div
        className={
          hamburger
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleHamburger} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <li
              onClick={() => setHamburger(false)}
              className="py-4 cursor-pointer"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => setHamburger(false)}
              className="py-4 cursor-pointer"
            >
              <Link href="/posts">Posts</Link>
            </li>
            <li
              onClick={() => setHamburger(false)}
              className="py-4 cursor-pointer"
            >
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <a href="mailto:jeongjeson656@gmail.com">
            <AiOutlineMail size={30} className="cursor-pointer" />
          </a>
          <a href="https://github.com/Jeong-Je" target="_blank">
            <AiOutlineGithub size={30} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </nav>
  );
}

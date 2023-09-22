"use client";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handler = () => {
      const documentElement = document.documentElement;
      // get the scroll top position
      const scrolled = documentElement.scrollTop;

      // calculate the max height of the document
      const maxHeight =
        documentElement.scrollHeight - documentElement.clientHeight;

      // calculate the percentage
      const scrollPercent = (scrolled / maxHeight) * 100;

      // update state
      setScroll(scrollPercent);
    };
    // add event listener
    window.addEventListener("scroll", handler);

    // remove event listener on unmount
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="z-10 bg-sky-200 fixed top-0 h-2 w-screen">
      <div
        className="bg-sky-400 h-full"
        style={{ width: scroll + "%" }}
      ></div>
    </div>
  );
};
export default ScrollIndicator;
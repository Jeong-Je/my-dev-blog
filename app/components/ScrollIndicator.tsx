"use client";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);
  // const [rainbowColor, setRainbowColor] = useState("red");

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
      setScroll(scrollPercent - 0.1);

      // Calculate the rainbow color based on scroll position
      // const hue = (scrollPercent * 1.2) / 100; // Adjust the multiplier for desired speed
      // setRainbowColor(`hsl(${hue * 360}, 100%, 50%)`);
    };

    // add event listener
    window.addEventListener("scroll", handler);

    // remove event listener on unmount
    return () => window.removeEventListener("scroll", handler);
    
  }, [scroll]);

  // const rainbowGradient = {
  //   background: `linear-gradient(to right, ${rainbowColor}, violet)`,
  // };

  return (
    <div className="bg-sky-400 fixed h-1 w-screen">
      <div
        className="h-full bg-sky-900"
        style={{ width: scroll + "%" }} //style={{ width: scroll + "%" }, ...rainbowGradient}
      ></div>
    </div>
  );
};

export default ScrollIndicator;

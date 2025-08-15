import React, { useState, useEffect } from "react";
import { counterItems } from "../constants/index";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  const [triggerCounter, setTriggerCounter] = useState(false);

  useEffect(() => {
    // Define the scroll handler outside, so we can add/remove it properly
    const activateTrigger = () => {
      if (window.scrollY > 148) {
        setTriggerCounter(true);
      }
    };

    // Add the scroll event listener once when component mounts
    window.addEventListener("scroll", activateTrigger);

    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener("scroll", activateTrigger);
    };
  }, []);

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
            key={item.label}
          >
            <div
              key={item.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              {triggerCounter && (
                <CountUp end={item.value} suffix={item.suffix} />
              )}
            </div>

            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;

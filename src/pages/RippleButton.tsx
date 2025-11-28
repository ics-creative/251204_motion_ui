import { motion } from "motion/react";
import { type MouseEvent, useRef, useState } from "react";

export const RippleButton = () => {
  const [rippleAnimationKey, setRippleAnimationKey] = useState(0);
  const [clickX, setClickX] = useState(0);
  const [clickY, setClickY] = useState(0);

  const buttonElementRef = useRef<HTMLButtonElement>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setClickX(event.clientX - (buttonElementRef.current?.getBoundingClientRect().x ?? 0));
    setClickY(event.clientY - (buttonElementRef.current?.getBoundingClientRect().y ?? 0));
    setRippleAnimationKey(prev => prev + 1);
  };

  return (
    <div>
      <h1 className="pageTitle">Ripple Button</h1>
      <div className="contentsContainer">
        <button
          className="basicButton rippleButton"
          ref={buttonElementRef}
          onClick={event => handleClick(event)}
        >
          Click me
          {rippleAnimationKey > 0 && (
            <motion.span style={{ left: clickX, top: clickY }} className="rippleWrapperElement">
              <motion.span
                key={rippleAnimationKey}
                className="rippleEffectElement"
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              ></motion.span>
            </motion.span>
          )}
        </button>
      </div>
    </div>
  );
};

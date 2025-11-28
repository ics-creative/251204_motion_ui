import { motion, type Variants } from "motion/react";
import { useState } from "react";
import { EASE_OUT_QUART } from "../assets/easing";

const SEGMENT_BUTTON_LIST = ["daily", "weekly", "monthly", "yearly"] as const;

export const SegmentButton = () => {
  const [activeSegment, setActiveSegment] = useState<(typeof SEGMENT_BUTTON_LIST)[number]>("daily");

  const handleSegmentClick = (segment: (typeof SEGMENT_BUTTON_LIST)[number]) => {
    setActiveSegment(segment);
  };

  const variants: Variants = {
    daily: {
      x: 0,
      transition: { duration: 0.3, ease: EASE_OUT_QUART },
    },
    weekly: {
      x: 120,
      transition: { duration: 0.3, ease: EASE_OUT_QUART },
    },
    monthly: {
      x: 240,
      transition: { duration: 0.3, ease: EASE_OUT_QUART },
    },
    yearly: {
      x: 360,
      transition: { duration: 0.3, ease: EASE_OUT_QUART },
    },
  };

  return (
    <div>
      <h1 className="pageTitle">Segment Button</h1>
      <div className="contentsContainer">
        <div className="segmentButtonContainer">
          <motion.div
            className="segmentButtonBackground"
            variants={variants}
            animate={activeSegment}
          ></motion.div>
          {SEGMENT_BUTTON_LIST.map(segment => (
            <button className="segmentButton" onClick={() => handleSegmentClick(segment)}>
              {segment}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

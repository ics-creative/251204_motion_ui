import { motion, type Variants } from "motion/react";
import { useState } from "react";
import { EASE_OUT_QUART } from "../assets/easing";

// セグメントボタンのリスト（定数として定義）
const SEGMENT_BUTTON_LIST = ["daily", "weekly", "monthly", "yearly"] as const;

export const SegmentButton = () => {
  const [activeSegment, setActiveSegment] = useState<(typeof SEGMENT_BUTTON_LIST)[number]>("daily");

  // セグメントボタンがクリックされたときの処理
  const handleSegmentClick = (segment: (typeof SEGMENT_BUTTON_LIST)[number]) => {
    setActiveSegment(segment);
  };

  // 背景のアニメーション定義
  const variants: Variants = {
    daily: {
      x: 0, // 最初のボタンの位置（X座標0）
    },
    weekly: {
      x: 120, // 2番目のボタンの位置（X座標120px）
    },
    monthly: {
      x: 240, // 3番目のボタンの位置（X座標240px）
    },
    yearly: {
      x: 360, // 4番目のボタンの位置（X座標360px）
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
            transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
          ></motion.div>
          {SEGMENT_BUTTON_LIST.map(segment => (
            <button
              className="segmentButton"
              onClick={() => handleSegmentClick(segment)}
              key={segment}
            >
              {segment}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

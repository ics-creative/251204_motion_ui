import { animate, motion, useMotionValue, useTransform, type Variants } from "motion/react";
import { EASE_OUT_EXPO, EASE_OUT_QUART } from "../assets/easing";
import { useState } from "react";

const ALL_TASKS = 256;
const NOT_STARTED_VALUE = 53;
const IN_PROGRESS_VALUE = 40;
const COMPLETED_VALUE = 163;
const PROGRESS_RATE = COMPLETED_VALUE / ALL_TASKS;

export const ProgressRate = () => {
  const progressRate = useMotionValue(0);
  const notStartedValue = useMotionValue(0);
  const inProgressValue = useMotionValue(0);
  const completedValue = useMotionValue(0);

  const rate = useTransform(() => Math.round(progressRate.get()));
  const notStartedCount = useTransform(() => Math.round(notStartedValue.get()));
  const inProgressCount = useTransform(() => Math.round(inProgressValue.get()));
  const completedCount = useTransform(() => Math.round(completedValue.get()));

  const drawPathVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: PROGRESS_RATE,
      transition: { duration: 1.8, ease: EASE_OUT_QUART },
    },
  };
  
  animate(progressRate, PROGRESS_RATE * 100, {
    duration: 1.8,
    ease: EASE_OUT_EXPO,
  });
  animate(notStartedValue, NOT_STARTED_VALUE, {
    duration: 1.8,
    ease: EASE_OUT_EXPO,
  });
  animate(inProgressValue, IN_PROGRESS_VALUE, {
    duration: 1.8,
    ease: EASE_OUT_EXPO,
  });
  animate(completedValue, COMPLETED_VALUE, {
    duration: 1.8,
    ease: EASE_OUT_EXPO,
  });

  const [animationKey, setAnimationKey] = useState<number>(0);

  const handleReplay = () => {
    setAnimationKey(prev => prev + 1);
    progressRate.set(0);
    notStartedValue.set(0);
    inProgressValue.set(0);
    completedValue.set(0);
  };
  return (
    <div>
      <h1 className="pageTitle">Progress Rate</h1>
      <div className="contentsContainer">
        <div className="progressRateContainer" key={animationKey}>
          <div className="donutChartContainer">
            <div className="donutChart">
              <motion.svg
                width="158"
                height="158"
                viewBox="0 0 158 158"
                fill="none"
                initial="hidden"
                animate="visible"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M79 15C114.346 15 143 43.6538 143 79C143 114.346 114.346 143 79 143C43.6538 143 15 114.346 15 79C15 43.6538 43.6538 15 79 15"
                  stroke="#e9e9e9"
                  stroke-width="20"
                />
                <motion.path
                  d="M79 15C114.346 15 143 43.6538 143 79C143 114.346 114.346 143 79 143C43.6538 143 15 114.346 15 79C15 43.6538 43.6538 15 79 15"
                  stroke="black"
                  stroke-width="30"
                  variants={drawPathVariants}
                />
              </motion.svg>
              <div className="rateContainer">
                <p className="rateTitle">Progress</p>
                <div className="rateValueContainer">
                  <motion.div className="rateValue">{rate}</motion.div>
                  <div className="rateUnit">%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dataContainer">
            <div className="dataItem">
              <p className="dataItemTitle">Not Started</p>
              <p className="dataItemValue">
                <motion.span className="dataItemValueNumber">{notStartedCount}</motion.span>
                <span className="dataItemValueUnit">/256</span>
              </p>
            </div>
            <div className="dataItem">
              <p className="dataItemTitle">In Progress</p>
              <p className="dataItemValue">
                <motion.span className="dataItemValueNumber">{inProgressCount}</motion.span>
                <span className="dataItemValueUnit">/256</span>
              </p>
            </div>
            <div className="dataItem">
              <p className="dataItemTitle">Completed</p>
              <p className="dataItemValue">
                <motion.span className="dataItemValueNumber">{completedCount}</motion.span>
                <span className="dataItemValueUnit">/256</span>
              </p>
            </div>
          </div>
        </div>
        <button className="basicButton" onClick={handleReplay}>
          Replay
        </button>
      </div>
    </div>
  );
};

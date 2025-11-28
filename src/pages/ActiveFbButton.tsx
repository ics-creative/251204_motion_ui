import { motion } from "motion/react";

export const ActiveFbButton = () => {
  return (
    <div>
      <h1 className="pageTitle">Active Feedback Button</h1>
      <div className="contentsContainer">
        <motion.button
          className="basicButton activeFbButton"
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.1,
          }}
        >
          Click me
        </motion.button>
      </div>
    </div>
  );
};

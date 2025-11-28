import { motion } from "motion/react";

export const ActiveFbButton = () => {
  return (
    <div>
      <h1 className="pageTitle">Active Feedback Button</h1>
      <div className="contentsContainer">
        <motion.button
          className="basicButton activeFbButton"
          // whileTap: ボタンが押されている間のアニメーション
          // scale: 0.95に縮小（5%小さくなる）ことで、押された感覚を視覚的に表現
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.1, // アニメーション時間: 0.1秒（素早い反応）
          }}
        >
          Click me
        </motion.button>
      </div>
    </div>
  );
};

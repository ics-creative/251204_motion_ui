import { AnimatePresence, motion, stagger } from "motion/react";
import { useState } from "react";
import arrowDown from "../assets/arrow_down.svg";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ドロップダウンをトグル（開閉を切り替え）する関数
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // ドロップダウンを閉じる関数
  const handleClose = () => {
    setIsOpen(false);
  };

  // ドロップダウンメニューのコンテナのアニメーション定義
  const variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        // stagger: 子要素を順番にアニメーションさせる
        // 0.05秒間隔で、最初の要素は0.1秒後に開始
        delayChildren: stagger(0.05, { startDelay: 0.1 }),
      },
    },
    closed: { opacity: 0, height: 0 },
  };

  // メニュー項目（ボタン）のアニメーション定義
  const buttonVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -25 },
  };

  // アイコン（矢印）のアニメーション定義
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <div>
      <h1 className="pageTitle">Dropdown</h1>
      <div className="contentsContainer">
        <div className="dropdownContainer">
          <button className="basicButton dropdownButton" onClick={handleToggle}>
            <span className="dropdownButtonText">Select your browser</span>
            <motion.img
              src={arrowDown}
              alt="arrow down"
              width={16}
              height={16}
              className="dropdownButtonIcon"
              animate={isOpen ? "open" : "closed"}
              variants={iconVariants}
            />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="dropdownContent"
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                role="menu"
              >
                <motion.button
                  className="dropdownItemButton"
                  role="menuitem" // アクセシビリティ: メニュー項目であることを示す
                  onClick={handleClose}
                  variants={buttonVariants} // ボタンのアニメーション設定
                >
                  Google Chrome
                </motion.button>
                <motion.button
                  className="dropdownItemButton"
                  role="menuitem"
                  onClick={handleClose}
                  variants={buttonVariants}
                >
                  Firefox
                </motion.button>
                <motion.button
                  className="dropdownItemButton"
                  role="menuitem"
                  onClick={handleClose}
                  variants={buttonVariants}
                >
                  Safari
                </motion.button>
                <motion.button
                  className="dropdownItemButton"
                  role="menuitem"
                  onClick={handleClose}
                  variants={buttonVariants}
                >
                  Edge
                </motion.button>
                <motion.button
                  className="dropdownItemButton"
                  role="menuitem"
                  onClick={handleClose}
                  variants={buttonVariants}
                >
                  Opera
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

import { AnimatePresence, motion, stagger } from "motion/react";
import { useState } from "react";
import { EASE_OUT_QUART } from "../assets/easing";
import arrowBack from "../assets/arrow_back.svg";
import menu from "../assets/menu.svg";

// ドロップダウンメニューのアイテム
const MENU_ITEMS = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Works",
  },
  {
    name: "Blog",
  },
  {
    name: "Contact",
  },
];

export const HamburgerMenu = () => {
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
      transition: {
        // stagger: 子要素を順番にアニメーションさせる
        // 0.05秒間隔で、最初の要素は0.1秒後に開始
        delayChildren: stagger(0.08, { startDelay: 0.2 }),
        ease: EASE_OUT_QUART,
        duration: 0.5,
      },
    },
  };

  // メニュー項目（ボタン）のアニメーション定義
  const buttonVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -25 },
  };

  // メニューコンテンツのアニメーション定義
  const menuContentVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  // メニューバックドロップのアニメーション定義
  const backdropVariants = {
    open: { opacity: 1, transition: { ease: EASE_OUT_QUART, duration: 0.5, delay: 0.1 } },
    closed: { opacity: 0, transition: { ease: EASE_OUT_QUART, duration: 0.5 } },
  };

  return (
    <div>
      <h1 className="pageTitle">Hamburger Menu</h1>
      <div className="contentsContainer">
        <div className="hamburgerMenuContainer">
          <button className="basicButton hamburgerButton" onClick={handleToggle} aria-label="Menu">
            <img src={menu} alt="" width={24} height={24} className="hamburgerButtonIcon" />
          </button>
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  className="menuContent"
                  variants={menuContentVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ ease: EASE_OUT_QUART, duration: 0.5 }}
                >
                  <button className="closeButton" onClick={handleClose} aria-label="Close">
                    <img src={arrowBack} alt="close" width={16} height={16} />
                  </button>
                  <motion.div
                    className="menuList"
                    variants={variants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    role="menu"
                  >
                    {MENU_ITEMS.map(item => (
                      <motion.button
                        key={item.name}
                        className="menuItem"
                        role="menuitem"
                        onClick={handleClose}
                        variants={buttonVariants}
                        transition={{ ease: EASE_OUT_QUART, duration: 0.5 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div
                  className="menuBackdrop"
                  variants={backdropVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={handleClose}
                ></motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

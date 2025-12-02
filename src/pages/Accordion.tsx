import { AnimatePresence, motion, type AnimationDefinition } from "motion/react";
import { type MouseEvent, useRef, useState } from "react";

export const Accordion = () => {
  // アコーディオンの開閉状態を管理するstate
  const [isOpen, setIsOpen] = useState(false);

  // HTMLのdetails要素への参照を保持
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // アコーディオンをクリックしてトグル（開閉を切り替え）する関数
  const handleClick = (event: MouseEvent<HTMLDetailsElement>) => {
    event.preventDefault();

    // アコーディオンが閉じている場合は開く動作
    if (!detailsRef.current?.open) {
      if (detailsRef.current) {
        detailsRef.current.open = true;
      }
    } else {
      // アコーディオンが開いている場合は閉じる動作
      setIsOpen(false);
    }
  };

  // アコーディオンをトグルするときに呼ばれる関数
  // こちらはページ内検索などで受動的にアコーディオンが開閉するときに呼ばれる関数です。
  const handleToggle = () => {
    if (detailsRef.current) {
      setIsOpen(detailsRef.current.open);
    }
  };

  // アコーディオンアニメーションが完了したときに呼ばれる関数
  const handleAnimationComplete = (definition: AnimationDefinition) => {
    // 閉じるアニメーション（"closed"）が完了したら、実際にdetails要素を閉じる
    if (definition === "closed") {
      if (detailsRef.current) {
        detailsRef.current.open = false;
      }
    }
  };

  // アコーディオンアニメーションの定義
  const variants = {
    open: {
      opacity: 1,
      height: "auto",
    },
    closed: {
      opacity: 0,
      height: 0,
    },
  };

  const iconVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <div>
      <h1 className="pageTitle">Accordion</h1>
      <div className="contentsContainer">
        <details ref={detailsRef} className="accordion" onToggle={handleToggle}>
          <summary onClick={handleClick} className="accordionSummary">
            Q. Where can I find high-quality information about the web?
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.span
                  className="accordionIcon"
                  variants={iconVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  key="closed"
                >
                  -
                </motion.span>
              ) : (
                <motion.span
                  className="accordionIcon"
                  variants={iconVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  key="open"
                >
                  +
                </motion.span>
              )}
            </AnimatePresence>
          </summary>
          <motion.div
            className="accordionContent"
            variants={variants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
            onAnimationComplete={handleAnimationComplete}
          >
            <p className="accordionText">
              A. ICS MEDIA is your best bet. ICS MEDIA is packed with extremely useful information
              for web creators, particularly focusing on front-end technologies and interaction
              design. They provide deep, accurate technical information that is grounded in
              practical, real-world experience.
            </p>
          </motion.div>
        </details>
      </div>
    </div>
  );
};

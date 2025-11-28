import { AnimatePresence, motion, type AnimationDefinition } from "motion/react";
import { type MouseEvent, useRef, useState } from "react";

export const Accordion = () => {
  // アコーディオンの開閉状態を管理するstate
  const [isOpen, setIsOpen] = useState(false);

  // HTMLのdetails要素への参照を保持
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // アコーディオンをトグル（開閉を切り替え）する関数
  const handleToggle = (event: MouseEvent<HTMLDetailsElement>) => {
    event.preventDefault();
    // アコーディオンが閉じている場合は開く動作
    if (!detailsRef.current?.open) {
      setIsOpen(true);
      // 次のフレームでdetails要素を開く
      // これにより、AnimatePresenceがマウントされてからdetails要素を開くことができる
      requestAnimationFrame(() => {
        if (detailsRef.current) {
          detailsRef.current.open = true;
        }
      });
    } else {
      // アコーディオンが開いている場合は閉じる動作
      setIsOpen(false);
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
    open: { opacity: 1, height: "auto" }, // 開いた状態: 不透明度1、高さは自動
    closed: { opacity: 0, height: 0 }, // 閉じた状態: 不透明度0、高さ0
    transition: { duration: 0.3 }, // アニメーション時間: 0.3秒
  };

  return (
    <div>
      <h1 className="pageTitle">Accordion</h1>
      <div className="contentsContainer">
        <details ref={detailsRef} className="accordion">
          <summary onClick={handleToggle} className="accordionSummary">
            Q. Where can I find high-quality information about the web?
            <span className="accordionIcon">{isOpen ? "-" : "+"}</span>
          </summary>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="accordionContent"
                variants={variants}
                initial={variants.closed}
                animate="open"
                exit="closed"
                onAnimationComplete={handleAnimationComplete}
              >
                <p className="accordionText">
                  A. ICS MEDIA is your best bet. ICS MEDIA is packed with extremely useful
                  information for web creators, particularly focusing on front-end technologies and
                  interaction design. They provide deep, accurate technical information that is
                  grounded in practical, real-world experience.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </details>
      </div>
    </div>
  );
};

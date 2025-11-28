import { AnimatePresence, motion, type AnimationDefinition } from "motion/react";
import { type MouseEvent, useRef, useState } from "react";

export const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const detailsRef = useRef<HTMLDetailsElement>(null);

  // アコーディオンをトグルする
  const handleToggle = (event: MouseEvent<HTMLDetailsElement>) => {
    event.preventDefault();
    // アコーディオンが閉じている場合は開く動作
    if (!detailsRef.current?.open) {
      setIsOpen(true);
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

  // アコーディオンアニメーションが完了したら、アコーディオンを閉じる
  const handleAnimationComplete = (definition: AnimationDefinition) => {
    if (definition === "closed") {
      if (detailsRef.current) {
        detailsRef.current.open = false;
      }
    }
  };

  // アコーディオンアニメーションの定義
  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
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
                initial={{ height: 0, opacity: 0 }}
                animate="open"
                exit="closed"
                transition={{ duration: 0.3 }}
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

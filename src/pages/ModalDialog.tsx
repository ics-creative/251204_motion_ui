import { AnimatePresence, motion, type AnimationDefinition } from "motion/react";
import { type MouseEvent, useRef, useState } from "react";
import "../assets/modalDialog.css";

export const ModalDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalDialogRef = useRef<HTMLDialogElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    // 次のフレームでshowModal()を呼び出して、AnimatePresenceがマウントされるのを待つ
    requestAnimationFrame(() => {
      modalDialogRef.current?.showModal();
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event: MouseEvent<HTMLDialogElement>) => {
    // dialog要素のクリックイベントで、backdropをクリックした場合
    // dialog内部については.modalContentInnerが覆っているのでevent.targetがdialog要素になることはない
    // つまりbackdropをクリックしたときのみevent.target === event.currentTargetとなる
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleAnimationComplete = (definition: AnimationDefinition) => {
    // exitアニメーションが完了したら、実際にdialogを閉じる
    if (definition === "hidden") {
      modalDialogRef.current?.close();
    }
  };

  // モーダルアニメーションの定義
  const variants = {
    visible: { opacity: 1, scale: 1, x: "-50%", y: "-50%" },
    hidden: { opacity: 0, scale: 0.9, x: "-50%", y: "-50%" },
  };

  return (
    <div>
      <h1 className="pageTitle">Modal Dialog</h1>
      <div className="contentsContainer">
        <button className="basicButton" onClick={handleOpen}>
          Open Modal
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="modalBackdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.dialog
                className="modalContent"
                initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                variants={variants}
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.2 }}
                ref={modalDialogRef}
                onAnimationComplete={handleAnimationComplete}
                onClick={handleOverlayClick}
              >
                <div className="modalContentInner">
                  <h2>Modal Dialog</h2>
                  <p>This is the content of the modal dialog.</p>
                  <button className="basicButton" onClick={handleClose}>
                    Close
                  </button>
                </div>
              </motion.dialog>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

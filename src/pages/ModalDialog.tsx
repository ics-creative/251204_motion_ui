import { motion, type AnimationDefinition } from "motion/react";
import { type MouseEvent, useRef, useState } from "react";

export const ModalDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  // HTMLのdialog要素への参照を保持
  const modalDialogRef = useRef<HTMLDialogElement>(null);

  // モーダルを開く関数
  const handleOpen = () => {
    modalDialogRef.current?.showModal();
    setIsOpen(true);
  };

  // モーダルを閉じる関数
  const handleClose = () => {
    setIsOpen(false);
  };

  // dialog要素のbackdropをクリックしたときの処理
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    // dialog要素のクリックイベントで、backdropをクリックした場合
    // dialog内部については.modalContentInnerが覆っているのでevent.targetがdialog要素になることはない
    // つまりbackdropをクリックしたときのみevent.target === event.currentTargetとなる
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  // モーダルアニメーションが完了したときに呼ばれる関数
  const handleAnimationComplete = (definition: AnimationDefinition) => {
    // exitアニメーション（"hidden"）が完了したら、実際にdialogを閉じる
    if (definition === "hidden") {
      modalDialogRef.current?.close();
    }
  };

  // モーダルアニメーションの定義
  const modalVariants = {
    visible: {
      opacity: 1, // 不透明度: 1（完全に表示）
      scale: 1, // スケール: 1（元のサイズ）
      x: "-50%", // x位置: -50%（中央揃えのため）
      y: "-50%", // y位置: -50%（中央揃えのため）
    },
    hidden: {
      opacity: 0, // 不透明度: 0（透明）
      scale: 0.9, // スケール: 0.9（少し小さく）
      x: "-50%", // x位置: -50%（中央揃えのため）
      y: "-50%", // y位置: -50%（中央揃えのため）
    },
  };

  // オーバーレイ（背景）のアニメーション定義
  const backdropVariants = {
    visible: { opacity: 1, visibility: "visible" },
    hidden: { opacity: 0, visibility: "hidden" },
  };

  return (
    <div>
      <h1 className="pageTitle">Modal Dialog</h1>
      <div className="contentsContainer">
        <button className="basicButton" onClick={handleOpen}>
          Open Modal
        </button>
        <div>
          <motion.div
            className="modalBackdrop"
            variants={backdropVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            transition={{ duration: 0.2 }}
          />
          <motion.dialog
            className="modalContent"
            variants={modalVariants}
            animate={isOpen ? "visible" : "hidden"}
            transition={{ duration: 0.2 }}
            ref={modalDialogRef}
            onAnimationComplete={handleAnimationComplete}
            onClick={handleBackdropClick}
          >
            <div className="modalContentInner">
              <h2>Modal Dialog</h2>
              <p>This is the content of the modal dialog.</p>
              <button className="basicButton" onClick={handleClose}>
                Close
              </button>
            </div>
          </motion.dialog>
        </div>
      </div>
    </div>
  );
};

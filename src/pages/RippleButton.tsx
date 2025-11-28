import { motion } from "motion/react";
import { type MouseEvent, useRef, useState } from "react";

export const RippleButton = () => {
  // リップルアニメーションを再実行するためのキー
  // キーを変更することで、motion要素を再マウントしてアニメーションをリセット
  const [rippleAnimationKey, setRippleAnimationKey] = useState(0);

  // クリック位置のX座標（ボタン内の相対位置）
  const [clickX, setClickX] = useState(0);
  // クリック位置のY座標（ボタン内の相対位置）
  const [clickY, setClickY] = useState(0);

  // ボタン要素への参照を保持
  const buttonElementRef = useRef<HTMLButtonElement>(null);

  // ボタンがクリックされたときの処理
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    // クリック位置をボタン内の相対座標に変換
    // event.clientX: 画面全体でのX座標
    // getBoundingClientRect().x: ボタンの左端のX座標
    // 差分を取ることで、ボタン内での相対位置を取得
    setClickX(event.clientX - (buttonElementRef.current?.getBoundingClientRect().x ?? 0));
    setClickY(event.clientY - (buttonElementRef.current?.getBoundingClientRect().y ?? 0));
    // キーを変更してリップルアニメーションを再実行
    setRippleAnimationKey(prev => prev + 1);
  };

  return (
    <div>
      <h1 className="pageTitle">Ripple Button</h1>
      <div className="contentsContainer">
        <button
          className="basicButton rippleButton"
          ref={buttonElementRef}
          onClick={event => handleClick(event)}
        >
          Click me
          {rippleAnimationKey > 0 && (
            <motion.span style={{ left: clickX, top: clickY }} className="rippleWrapperElement">
              <motion.span
                key={rippleAnimationKey}
                className="rippleEffectElement"
                initial={{ opacity: 1, scale: 0 }} // 初期状態: 不透明度1、スケール0（点）
                animate={{ opacity: 0, scale: 1 }} // アニメーション後: 不透明度0、スケール1（拡大）
                transition={{
                  duration: 0.5, // アニメーション時間: 0.5秒
                  ease: "easeOut", // イージング関数（減速する動き）
                }}
              ></motion.span>
            </motion.span>
          )}
        </button>
      </div>
    </div>
  );
};

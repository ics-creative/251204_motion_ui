import { motion } from "motion/react";
import { presidentList } from "../data/presidentList";
import { useEffect, useRef, useState } from "react";

export const ScrollTriggeredAnimation = () => {
  const listContainerRef = useRef<HTMLDivElement>(null);

  const variants = {
    invisible: { opacity: 0, y: 10, filter: "blur(0px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  const [animationKey, setAnimationKey] = useState<number>(0);

  const resetAnimation = () => {
    setAnimationKey(prev => prev + 1);
  };

  useEffect(() => {
    if (listContainerRef.current) {
      listContainerRef.current.scrollTop = 0;
    }
  }, [animationKey]);

  return (
    <div>
      <h1 className="pageTitle">Scroll Triggered Animation</h1>
      <div className="contentsContainer">
        <div className="listContainer" ref={listContainerRef} key={animationKey}>
          <div className="listHeader">
            <span className="listHeaderIndex">No.</span>
            <span className="listHeaderName">Name</span>
            <span className="listHeaderTerm">Term</span>
            <span className="listHeaderParty">Party</span>
          </div>
          <ul className="listItems">
            {presidentList.map((item, index) => (
              <motion.li
                key={index}
                className="listItem"
                variants={variants}
                initial="invisible"
                whileInView="visible"
                viewport={{ amount: 0.4, once: true }}
                transition={{
                  opacity: { duration: 0.3 },
                  y: { duration: 0.4 },
                  filter: { duration: 0.5 },
                }}
              >
                <span className="listItemIndex">{index + 1}</span>
                <span className="listItemName">{item.name}</span>
                <span className="listItemTerm">{item.term}</span>
                <span className="listItemParty">{item.party}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <button onClick={resetAnimation} className="basicButton resetButton">
          Reset
        </button>
      </div>
    </div>
  );
};

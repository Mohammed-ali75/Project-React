import React, { useState, useEffect } from "react";

const ConsoleText = ({ words, id, colors }) => {
  const [letterCount, setLetterCount] = useState(1);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const [visible, setVisible] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        setWaiting(true);
        const updatedColors = [...colors];
        const usedColor = updatedColors.shift();
        updatedColors.push(usedColor);
        const updatedWords = [...words];
        const usedWord = updatedWords.shift();
        updatedWords.push(usedWord);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setX(1);
        setLetterCount((prevCount) => prevCount + x);
        setWaiting(false);
      } else if (
        letterCount === words[currentWordIndex].length + 1 &&
        !waiting
      ) {
        setWaiting(true);
        setX(-1);
        setLetterCount((prevCount) => prevCount + x);
        setWaiting(false);
      } else if (!waiting) {
        setLetterCount((prevCount) => prevCount + x);
      }
    }, 120);

    const interval2 = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 400);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [letterCount, waiting, words, x, colors, currentWordIndex]);

  const targetStyle = {
    color: colors[currentWordIndex],
  };

  return (
    <div className="console-container">
      <span id={id} style={targetStyle}>
        {words[currentWordIndex].substring(0, letterCount)}
      </span>
      <div
        className={`console-underscore ${visible ? "" : "hidden"}`}
        id="console"
      >
        &#95;
      </div>
    </div>
  );
};

export default ConsoleText;

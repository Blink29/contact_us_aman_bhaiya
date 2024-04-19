import React, { useState, useEffect } from 'react';
import './CursorAnimation.css'; // Import your CSS file

const CursorAnimation = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [words, setWords] = useState(['Hello', 'World', 'React']);
  const [typingSpeed, setTypingSpeed] = useState(100); // Speed in milliseconds

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentLetterIndex < words[currentWordIndex].length) {
          setCurrentLetterIndex(prevIndex => prevIndex + 1);
        } else {
          setIsDeleting(true);
          setTypingSpeed(100); // Pause before deleting
        }
      } else {
        // Deleting
        if (currentLetterIndex > 0) {
          setCurrentLetterIndex(prevIndex => prevIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length); // Move to the next word
          setTypingSpeed(100); // Reset typing speed
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentLetterIndex, currentWordIndex, isDeleting, words, typingSpeed]);

  return (
    <div className="cursor-animation">
      <span>{words[currentWordIndex].slice(0, currentLetterIndex)}</span>
      <span className="cursor" />
    </div>
  );
};

export default CursorAnimation;

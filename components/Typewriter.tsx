"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delay?: number;
}

export default function Typewriter({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    delay = 2000,
}: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < word.length) {
                    setCurrentText(word.substring(0, currentText.length + 1));
                } else {
                    // Pause before starting to delete
                    setTimeout(() => setIsDeleting(true), delay);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(word.substring(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delay]);

    return (
        <span className="inline-flex items-center">
            <span>{currentText}</span>
            <span className="ml-1 w-[2px] h-[0.9em] bg-black animate-pulse inline-block align-middle" aria-hidden="true" />
        </span>
    );
}

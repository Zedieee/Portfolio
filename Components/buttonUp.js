import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="relative">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="fixed bottom-10 right-6 z-20 bg-gradient-to-r from-blue-500 to-pink-500 border-solid border-2 border-white rounded-full w-12 h-12 cursor-pointer text-white animate-bounce dark:from-[#5E5C5C] dark:to-[#9DC5C3]" 
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default ScrollToTop;
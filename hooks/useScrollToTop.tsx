import { useState, useEffect } from 'react';

const useScrollToTopButton = (scrollNumber: number) => {

    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        
        const handleScroll = () => {
            if (window.scrollY > scrollNumber) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollNumber]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return { showBackToTop, scrollToTop };
};

export default useScrollToTopButton;
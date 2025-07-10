import React, { useState, useEffect } from 'react';

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setShow(document.documentElement.classList.contains('dark'));
        };

        checkTheme();

        // Listen for theme changes in other tabs
        window.addEventListener('storage', checkTheme);

        // Listen for theme changes in this tab
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        const handleResize = () => {
            generateStars();
            generateMeteors();
        };

        window.addEventListener('resize', handleResize);

        // Generate on mount
        generateStars();
        generateMeteors();

        return () => {
            window.removeEventListener('storage', checkTheme);
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 20,
                size: Math.random() * 2 + 1,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3
            });
        }
        setMeteors(newMeteors);
    };

    if (!show) return null;

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className='star animate-pulse-subtle'
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`
                    }}
                />
            ))}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className='meteor animate-meteor'
                    style={{
                        width: `${meteor.size * 30}px`,
                        height: `${meteor.size}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: `-${meteor.delay}s`,
                        animationDuration: `${meteor.animationDuration}s`
                    }}
                />
            ))}
        </div>
    );
};
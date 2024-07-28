import React, { useEffect, useRef } from 'react';
import '../css/keyFocus.css'; // Make sure to import your CSS file
import key from '../assets/key focus.png'
const FocusArea = () => {
    const h1Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('h1-animate');
                    }
                });
            },
            { threshold: 0.1 } // Adjust this value as needed
        );

        if (h1Ref.current) {
            observer.observe(h1Ref.current);
        }

        return () => {
            if (h1Ref.current) {
                observer.unobserve(h1Ref.current);
            }
        };
    }, []);

    return (
        <div className='key'>
            <h1 ref={h1Ref} className="h1-animation">KEY FOCUS AREA</h1>
            <img src={key} alt="" />
        </div>
    );
};

export default FocusArea;

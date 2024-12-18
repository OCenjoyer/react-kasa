import React, { useState, useEffect } from 'react';
import FlecheG from '../../components/carousel/slider/flecheG';
import FlecheD from '../../components/carousel/slider/flecheD';
import './Carrousel.scss';

export default function Carrousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);
    const length = slides.length;

    const nextSlide = () => {
        setVisible(false);
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setVisible(false);
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 400);
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <section id="carrousel-container">
            {length > 1 && (
                <>
                    <FlecheG onClick={prevSlide} />
                    <FlecheD onClick={nextSlide} />
                </>
            )}
            {length > 0 && (
                <>
                    <img
                        src={slides[current]}
                        alt="appartement à louer"
                        className={`slideImage ${visible ? 'visible' : ''}`}
                    />
                    <span className="slide-number">{current + 1}/{length}</span>
                </>
            )}
        </section>
    );
}